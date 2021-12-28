import "./practiceList.scss";

import React from "react";

import getPracticeText from "./data";

import PracticeTextRow from "./practiceTextRow";

const practiceTexts =  getPracticeText(20);

function PracticeList() {
    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                practice => 
                    <li key={practice.text}>
                        <PracticeTextRow text={practice.text} latestRating={practice.latestRating}/>
                    </li>
            )}
        </ol>
    )
}

export default PracticeList;