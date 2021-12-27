import "./practiceList.scss";

import React from "react";

import getPracticeText from "./data";
import "./practiceList.scss"

const practiceText =  getPracticeText(10);

function PracticeList() {
    return (
        <ol className="practice-list-list">
            {practiceText.map(
                practice => <li key={practice.text}>{practice.text} {practice.supportText}</li>
            )}
        </ol>
    )
}

export default PracticeList;