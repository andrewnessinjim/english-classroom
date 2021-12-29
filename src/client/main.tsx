import "./main.scss"

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Outlet, Routes, Route, Link } from "react-router-dom";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

import Footer from "./components/rootTemplate/footer";
import Header from "./components/rootTemplate/header";
import StudentsList from "./components/studentsList";
import Login from "./components/login";
import Pronunciation from "./components/pronunciation/pronunciation";
import { UserContext } from "./context";


const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
})

function App() {
    return <>
        <Header/>
        <div className="main-extension">
            <main className="main">
                
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
}

const students = [
    {name: "Andrew", id: 1},
    {name: "Nessin", id: 2},
    {name: "Dan", id: 3},
    {name: "Nelson", id: 4},
    {name: "Tiny Mahima", id: 5},
]


const user = {};

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <UserContext.Provider value={user}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            <Route index element={<Login/>}/>
                            <Route path="/:username" element={<StudentsList students={students}/>}/>
                            <Route path="/teachers/:teacherName/students/:studentName" element={<Pronunciation/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("mount")
);