import "./main.scss"

import React from "react";
import ReactDOM from "react-dom";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Header/>
        <Main/>
        <Footer/>
    </ApolloProvider>,
    document.getElementById("mount")
);