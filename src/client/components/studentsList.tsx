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
    let [isAddStudentModalOpen, setAddStudentModelOpen] = useState(false);
    let [newStudentName, setNewStudentName] = useState("");
    return (
        !user.token?
            <Navigate to="/"/> 
            :
            <section className="students">
                {!isAddStudentModalOpen ? "" :<section className="modal-overlay" onClick={() => setAddStudentModelOpen(false)}>
                    <section className="modal-container" onClick={e => e.stopPropagation()}>
                        <form className="modal-content">
                            <h3>Add Student</h3>
                            <input type="text" placeholder="Name" minLength={3} required value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)}/>
                            <button className="btn addStudent-btn" onClick={handleStudentAddition}>Add</button>
                        </form>
                    </section>
                </section>}
                <section className="students-header">
                    <h2>My Students</h2>
                    <button className="btn" onClick={() => setAddStudentModelOpen(true)}>Add Student</button>
                </section>
                <ol className="students--list">
                    {data && data.fetchStudents.map(student => 
                        <li className="student" key = {student._id}>
                            <span className="student--name">{student.name}</span>
                            <Link to={`/${user.username}/${student._id}`}>
                                <button className="student--practiceBtn btn">
                                    Practice
                                </button>
                            </Link>
                        </li>
                    )}
                </ol>
            </section>
    )

    function handleStudentAddition(e) {
        e.preventDefault();

        //TODO: Send request to server to add student
    }
}

export default StudentsList;