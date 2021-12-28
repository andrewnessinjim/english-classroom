import "./pronunciation.scss";

import React, {useState} from "react";
import _ from "lodash";
import {useParams} from "react-router-dom";

import PlainInput from "./plainInput";
import PracticeList from "./practiceList";
import {getPracticeText, setRating} from "./data";

function Pronunciation() {
    let params = useParams();
    let {studentName} = params;

    const [practiceTexts, setPracticeTexts] = useState(getPracticeText());

    function updateRating(id, rating) {
        setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.find(practiceText => practiceText.id === id).latestRating = rating;
            return newPracticeTexts;
        });
    }

    function addPracticeText(text) {
        setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.unshift({id: prevPracticeTexts.length + 1, text})
            return newPracticeTexts;
        });
    }

    function updateText(id, text) {
        setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.find(practiceText => practiceText.id === id).text = text;
            return newPracticeTexts;
        });
    }

    return (
        <section className="pronunciation">
            <h2 className="pronunciation--heading">Pronunciation Practice - {`${studentName}`}</h2>
            <PracticeList 
                practiceTexts={practiceTexts}
                onRate={updateRating}
                onChangeConfirm={updateText}
            />
            <PlainInput onSubmit={addPracticeText}/>
        </section>
    )
}

export default Pronunciation;