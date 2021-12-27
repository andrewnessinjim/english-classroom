import "./studentsList.scss";

import React from "react";

function StudentsList(props) {
    const { students } = props;
    return (
        <section className="students">
            <h2 className="students--heading">My Students</h2>
            <ol className="students--list">
                {students.map(student => 
                    <li className="student" key = {student.id}>
                        <span className="student--name">{student.name}</span>
                        <button className="student--practiceBtn btn">
                            Practice
                        </button>
                    </li>
                )}
            </ol>
        </section>
    )
}

export default StudentsList;