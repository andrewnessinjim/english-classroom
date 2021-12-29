import "./practiceList.scss";

import React, {useState} from "react";

import {getPracticeText, setRating} from "./data";
import PracticeTextRow from "./practiceTextRow";


function PracticeList(props) {
    const {practiceTexts, onRate, onChangeConfirm} = props;

    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                practice => 
                    <PracticeTextRow
                        text={practice.text}
                        latestRating={practice.latestRating}
                        key={practice._id}
                        id={practice._id}
                        onRate={rating => onRate(practice._id, rating)}
                        onChangeConfirm={text => onChangeConfirm(practice._id, text)}
                    />
            )}
        </ol>
    )
}

export default PracticeList;