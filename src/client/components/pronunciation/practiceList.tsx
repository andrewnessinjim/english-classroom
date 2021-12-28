import "./practiceList.scss";

import React, {useState} from "react";

import {getPracticeText, setRating} from "./data";
import PracticeTextRow from "./practiceTextRow";


function PracticeList(props) {
    const {practiceTexts, onRate} = props;

    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                practice => 
                    <PracticeTextRow
                        text={practice.text}
                        latestRating={practice.latestRating}
                        key={practice.id}
                        id={practice.id}
                        onRate={rating => onRate(practice.id, rating)}
                    />
            )}
        </ol>
    )
}

export default PracticeList;