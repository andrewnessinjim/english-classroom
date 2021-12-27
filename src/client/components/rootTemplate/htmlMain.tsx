import "./htmlMain.scss"

import React from "react";

import StudentsList from "../studentsList";

const students = [
    {name: "Andrew", id: 1},
    {name: "Nessin", id: 2},
    {name: "Dan", id: 3},
    {name: "Nelson", id: 4},
    {name: "Tiny Mahima", id: 5},
]
function Main() {
    return (
        <div className="main-extension">
        <main className="main">
            <StudentsList students={students}/>
        </main>
        </div>
    )
}

export default Main;