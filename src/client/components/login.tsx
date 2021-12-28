import "./login.scss"

import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return (
        <section className="login-container">
            <div className="login-form">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </div>
        </section>
    )
}

export default Login;