import './index.scss';
import reportWebVitals from './reportWebVitals';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Outlet, Routes, Route, Link } from "react-router-dom";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


import Footer from "./components/rootTemplate/footer";
import Header from "./components/rootTemplate/header";
import StudentsList from "./components/studentsList";
import Login from "./components/login";
import Pronunciation from "./components/pronunciation/pronunciation";
import { token, UserContext } from "./context";
import Practice from "./components/pronunciation/practice";
import Progress from "./components/pronunciation/progress";

const authLink = setContext((_, { headers }) => {
    const authToken = token.token;
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : "",
      }
    }
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
                            <Route path="/:teacherName" element={<StudentsList students={students}/>}/>
                            <Route path="/:teacherName/:studentId" element={<Pronunciation/>}>
                                <Route path="/:teacherName/:studentId/practice" element={<Practice/>}/>
                                <Route path="/:teacherName/:studentId/progress" element={<Progress/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("mount")
);

reportWebVitals();
