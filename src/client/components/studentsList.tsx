import "./studentsList.scss";

import React, {useContext, useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context";
import { useQuery, gql } from "@apollo/client";

const FETCH_STUDENTS_OP = gql`
query FetchStudents($teacherId: String!) {
    fetchStudents(teacherId: $teacherId) {
        _id
        name
  }
}
`
function StudentsList(props) {
    const user = useContext(UserContext);
    const {data, loading, error} = useQuery(FETCH_STUDENTS_OP, {
        variables: {teacherId: user.id}
    });
    return (
        !user.token?
            <Navigate to="/"/> 
            :
            <section className="students">
                <h2 className="students--heading">My Students</h2>
                <ol className="students--list">
                    {data && data.fetchStudents.map(student => 
                        <li className="student" key = {student._id}>
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