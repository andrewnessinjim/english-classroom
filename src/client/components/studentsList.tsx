import "./studentsList.scss";

import React, {useContext} from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context";

function StudentsList(props) {
    const { students } = props;
    const user = useContext(UserContext);
    return (
        !user.token?
            <Navigate to="/"/> 
            :
            <section className="students">
                <h2 className="students--heading">My Students</h2>
                <ol className="students--list">
                    {students.map(student => 
                        <li className="student" key = {student.id}>
                            <span className="student--name">{student.name}</span>
                            <Link to={`/teachers/sarah/students/${student.name}`}>
                                <button className="student--practiceBtn btn">
                                    Practice
                                </button>
                            </Link>
                        </li>
                    )}
                </ol>
            </section>
    )
}

export default StudentsList;