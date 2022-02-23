import "./pronunciation.scss";

import React, {useContext} from "react";
import _ from "lodash";
import {Navigate, NavLink, Outlet, useParams} from "react-router-dom";

import { useQuery, gql} from "@apollo/client";
import { UserContext } from "../../context";

const FETCH_STUDENT_NAME_OP = gql`
query FetchStudent($studentId: String!) {
  fetchStudent(studentId: $studentId) {
    name
  }
}
`;


function Pronunciation() {
    const user = useContext(UserContext);
    let params = useParams();
    let {studentId} = params;

    const {data} = useQuery(FETCH_STUDENT_NAME_OP, {
        variables: {studentId}
    });

    let studentName = data && data.fetchStudent.name;

    return (
        !user.token ? 
            <Navigate to="/" />
            :
            <section className="pronunciation">
                <h2 className="pronunciation--heading">Pronunciation for {`${studentName}`}</h2>
                <nav className="pronunciation-nav">
                    <ol>
                        <NavLink 
                            className={({isActive}) => isActive ? "active" : ""}
                            to={`/${user.username}/${studentId}/practice`}>
                            Practice
                        </NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? "active" : ""}
                            to={`/${user.username}/${studentId}/progress`}>
                            Progress
                        </NavLink>
                    </ol>
                </nav>
                <Outlet/>
            </section>
    );
}

export default Pronunciation;