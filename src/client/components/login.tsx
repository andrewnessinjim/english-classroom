import "./login.scss"

import React, { useState, useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { token, UserContext } from "../context";

const LOGIN_OP = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      role
      username
    }
  }
}
`
function Login(){
    const user = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, {data, loading, error}] = useMutation(LOGIN_OP);
    const [isTyping, setIsTyping] = useState(false);
    const isLoggedIn = data && data.login && data.login.token;
    if(isLoggedIn) populateUserContext();
    
    return (
        isLoggedIn ? 
            <Navigate to={`/${user.username}`} />
            :
            <section className="login-container">
                <form className="login-form">
                    <input type="text" placeholder="Username" value={username} onChange={e => handleUsernameChange(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={e => handlePasswordChange(e.target.value)}/>
                    <button onClick={handleLogin}>Login</button>
                    <p className={`error ${error && !isTyping? "visible": "invisible"}`}>
                        {`${error? error.message :"&nbsp;"}`}
                    </p>
                </form>
            </section>
    )

    function handleUsernameChange(username){
        setIsTyping(true);
        setUsername(username);
    }

    function handlePasswordChange(password) {
        setIsTyping(true);
        setPassword(password);
    }

    function handleLogin(e) {
        e.preventDefault();
        setIsTyping(false);

        if(loading) return;
        login({
            variables: {
                username,
                password
            }
        })
    }

    function populateUserContext() {
        user.token = data.login.token;
        user.username = data.login.user.username;
        user.role = data.login.user.role;
        user.id = data.login.user.id;
        token.token = user.token;
    }
}


export default Login;