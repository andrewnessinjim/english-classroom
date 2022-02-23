import "./header.scss";

import React from "react";
import homeIcon from "../../icons/home.svg";
import { Link, useParams } from "react-router-dom";

function Header() {
    let params = useParams();

    return (
        <div className="header-extension">
            <header className="header">
                {!params.teacherName ? "" : 
                    <Link to={`/${params.teacherName}`}>
                        <img className="home-icon" src={homeIcon} alt="HOME"/>
                    </Link>
                }
                <h1 className="site-heading">Sarah's Classroom</h1>
            </header>
        </div>
    )
}

export default Header;