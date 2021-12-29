import "./pronunciation.scss";

import React from "react";
import _ from "lodash";
import {useParams} from "react-router-dom";

import PlainInput from "./plainInput";
import PracticeList from "./practiceList";
import { useQuery, gql} from "@apollo/client";

const FETCH_STUDENT_NAME_OP = gql`
query FetchStudent($studentId: String!) {
  fetchStudent(studentId: $studentId) {
    name
  }
}
`;

const FETCH_PRACTICE_TEXTS_OP = gql`
query FetchPracticeTexts($studentId: String!) {
  fetchPracticeTexts(studentId: $studentId) {
    text
    latestRating
    _id
  }
}
`;
function Pronunciation() {
    let params = useParams();
    let {studentId} = params;

    const practiceTexts = useQuery(FETCH_PRACTICE_TEXTS_OP, {
        variables: {studentId}
    });

    const {data, loading, error} = useQuery(FETCH_STUDENT_NAME_OP, {
        variables: {studentId}
    });

    let studentName = data && data.fetchStudent.name;

    function updateRating(id, rating) {
       /*  setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.find(practiceText => practiceText.id === id).latestRating = rating;
            return newPracticeTexts;
        }); */
    }

    function addPracticeText(text) {
        /* setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.unshift({id: prevPracticeTexts.length + 1, text})
            return newPracticeTexts;
        }); */
    }

    function updateText(id, text) {
        /* setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.find(practiceText => practiceText.id === id).text = text;
            return newPracticeTexts;
        }); */
    }

    return (
        <section className="pronunciation">
            <h2 className="pronunciation--heading">Pronunciation Practice - {`${studentName}`}</h2>
            {!practiceTexts.data || !practiceTexts.data.fetchPracticeTexts ?
                "Loading ":
                <PracticeList 
                    practiceTexts={practiceTexts.data.fetchPracticeTexts}
                    onRate={updateRating}
                    onChangeConfirm={updateText}
                />}
            <PlainInput onSubmit={addPracticeText}/>
        </section>
    )
}

export default Pronunciation;