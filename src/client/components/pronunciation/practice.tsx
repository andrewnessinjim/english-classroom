import "./practice.scss";

import React, {useContext, useState} from "react";
import _ from "lodash";
import {Navigate, useParams} from "react-router-dom";

import PlainInput from "./plainInput";
import PracticeList from "./practiceList";
import { useQuery, gql, useMutation} from "@apollo/client";
import { UserContext } from "../../context";

const FETCH_PRACTICE_TEXTS_OP = gql`
query FetchPracticeTexts($studentId: String!) {
  fetchPracticeTexts(studentId: $studentId) {
    text
    latestRating
    _id
  }
}
`;

const UPDATE_RATING_OP = gql`
mutation UpdateRating($teacherId: String!, $studentId: String!, 
                        $practiceTextId: String!, $newRating: Int!) {
  updateRating(teacherId: $teacherId, studentId: $studentId, practiceTextId: $practiceTextId, newRating: $newRating)
}`

const ADD_PRACTICE_TEXT_OP = gql`
    mutation AddPracticeText($teacherId: String!, $studentId: String!, $text: String!) {
        addPracticeText(teacherId: $teacherId, studentId: $studentId, text: $text)
    }
`;

const UPDATE_EXISTING_TEXT_OP = gql`
mutation UpdateText($teacherId: String!, $studentId: String!, $practiceTextId: String!, $newText: String!) {
  updateText(teacherId: $teacherId, studentId: $studentId, practiceTextId: $practiceTextId, newText: $newText)
}`

function Practice(){
    const user = useContext(UserContext);
    let params = useParams();
    let {studentId} = params;
    let [shouldScrollToEnd, setShouldScrollToEnd] = useState(false);

    const practiceTexts = useQuery(FETCH_PRACTICE_TEXTS_OP, {
        variables: {studentId}
    });

    const [serverUpdateRating] = useMutation(UPDATE_RATING_OP, {
        refetchQueries: [
            FETCH_PRACTICE_TEXTS_OP
        ]
    });

    const [serverAddPracticeText] = useMutation(ADD_PRACTICE_TEXT_OP, {
        refetchQueries: [
            FETCH_PRACTICE_TEXTS_OP
        ]
    });

    const [updateExistingText] = useMutation(UPDATE_EXISTING_TEXT_OP, {
        refetchQueries: [
            FETCH_PRACTICE_TEXTS_OP
        ]
    });

    return (
        <section className="practice-section">
            {!practiceTexts.data || !practiceTexts.data.fetchPracticeTexts ?
                    "Loading ":
                    <PracticeList 
                        practiceTexts={practiceTexts.data.fetchPracticeTexts}
                        onRate={updateRating}
                        onChangeConfirm={updateText}
                        shouldScrollToEnd={shouldScrollToEnd}
                    />}
                    <PlainInput onSubmit={addPracticeText}/>
        </section>
    );

    function updateRating(id, newRating) {
        serverUpdateRating({
            variables: {
                teacherId: user.id,
                studentId,
                practiceTextId: id,
                newRating
            }
        });
        setShouldScrollToEnd(false);
    }

    function addPracticeText(text) {
        serverAddPracticeText({
            variables: {
                teacherId: user.id,
                studentId,
                text
            }
        });
        setShouldScrollToEnd(true);
    }

    function updateText(id, newText) {
        updateExistingText({
            variables: {
                teacherId: user.id,
                studentId,
                practiceTextId: id,
                newText
            }
        });
        setShouldScrollToEnd(false);
    }

}

export default Practice;