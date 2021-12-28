import "./practiceList.scss";

import React, {useState} from "react";
import _ from "lodash";

import {getPracticeText, setRating} from "./data";
import PracticeTextRow from "./practiceTextRow";


function PracticeList() {
    const [practiceTexts, setPracticeTexts] = useState(getPracticeText(20));

    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                (practice, index) => 
                    <PracticeTextRow
                        text={practice.text}
                        latestRating={practice.latestRating}
                        key={practice.id}
                        id={practice.id}
                        onRate={updateRating(practice, index)}
                    />
            )}
        </ol>
    )

    function updateRating(practice: any, index: any) {
        return rating => {
            practiceTexts.find(practiceItr => practiceItr.id === practice.id).latestRating = rating;
            //setRating(practice.id, rating);
            setPracticeTexts(prevPracticeTexts => {
                const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
                newPracticeTexts[index].latestRating = rating;
                return newPracticeTexts;
            });
        };
    }
}



export default PracticeList;