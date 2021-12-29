import "./login.scss"

import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const LOGIN_OP = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      role
    }
  }
}
`
function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, {data, loading, error}] = useMutation(LOGIN_OP);
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();

    if(data && data.login && data.login.token) {
        navigate("/teachers/sarah");
    }

    return (
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
}


export default Login;