import "./login.scss"

import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return (
        <Link className="loginBtn" to="/teachers/sarah" >
            <button className="btn">
                Login
            </button>
        </Link>
    )
}

export default Login;