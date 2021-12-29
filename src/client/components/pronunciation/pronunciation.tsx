import "./pronunciation.scss";

import React, {useContext} from "react";
import _ from "lodash";
import {Navigate, useParams} from "react-router-dom";

import PlainInput from "./plainInput";
import PracticeList from "./practiceList";
import { useQuery, gql, useMutation} from "@apollo/client";
import { UserContext } from "../../context";

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

function Pronunciation() {
    const user = useContext(UserContext);
    let params = useParams();
    let {studentId} = params;

    const practiceTexts = useQuery(FETCH_PRACTICE_TEXTS_OP, {
        variables: {studentId}
    });

    const {data} = useQuery(FETCH_STUDENT_NAME_OP, {
        variables: {studentId}
    });

    let studentName = data && data.fetchStudent.name;

    const [serverUpdateRating] = useMutation(UPDATE_RATING_OP, {
            refetchQueries: [
                FETCH_PRACTICE_TEXTS_OP
            ]
        });

    const [serverAddPracticeText] = useMutation(ADD_PRACTICE_TEXT_OP, {
        refetchQueries: [
            FETCH_PRACTICE_TEXTS_OP
        ]
    })
    function updateRating(id, newRating) {
        serverUpdateRating({
            variables: {
                teacherId: user.id,
                studentId,
                practiceTextId: id,
                newRating
            }
        });
       /*  setPracticeTexts(prevPracticeTexts => {
            const newPracticeTexts = _.cloneDeep(prevPracticeTexts);
            newPracticeTexts.find(practiceText => practiceText.id === id).latestRating = rating;
            return newPracticeTexts;
        }); */
    }

    function addPracticeText(text) {
        serverAddPracticeText({
            variables: {
                teacherId: user.id,
                studentId,
                text
            }
        });
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
        !user.token ? 
            <Navigate to="/" />
            :
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