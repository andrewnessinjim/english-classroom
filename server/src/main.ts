import http from "http";
import fs from "fs";
import path from "path";

import express from "express"
import chalk from "chalk";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

import * as db from "./dao/db";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";

import checkHealth from "./health";
import { fetchUserInfo } from "./auth";
import apolloLogger from "./infra/apolloLogger";

const PORT = process.env.PORT || 3000;

boot();

async function boot() {
    await db.connect()
    const app = express();
    setUpRoutes(app);
    startApolloServer(app);
}

async function startApolloServer(app) {
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs: fs.readFileSync(
            path.join(__dirname, "schema.graphql"),
            "utf-8"
        ),
        resolvers: {
            Query,
            Mutation
        },
        plugins: [
            apolloLogger,
            ApolloServerPluginDrainHttpServer({httpServer}) 
        ],
        context: async ({req}) => {
            return {
                ...req,
                user: req && req.headers ? await fetchUserInfo(req.headers.authorization): null
            }
        }
    });

    await server.start();
    server.applyMiddleware({
        app
    });

    await new Promise(resolve => httpServer.listen({port: PORT}, () => {resolve(true)}));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);

}

async function setUpRoutes(app) {
    app.get("/healthcheck", (req, res) => {
        const health = checkHealth();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(health));
    });

    if(process.env.NODE_ENV == "production") {
        console.log(chalk.bgRed.white("Detected PRODUCTION env, serving static files from public directory."));
        app.use(express.static("public"));

        const indexPath = path.join(__dirname, '..','public', 'index.html');
        const indexHtmlFile = fs.readFileSync(indexPath, 'utf8');
        app.get("*", (req, res) => {
        res.send(indexHtmlFile);
    });
    } else {
        console.log(chalk.bgRed.white("Detected DEVELOPMENT env, not serving static files."));
    }
}