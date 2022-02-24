import "./practice.scss";

import {useContext, useState} from "react";
import {useParams} from "react-router-dom";

import PlainInput from "./plainInput";
import PracticeList from "./practiceList";
import { useQuery, gql, useMutation} from "@apollo/client";
import { UserContext } from "../../context";

import reset from "../../icons/reset.svg";

const FETCH_PRACTICE_TEXTS_OP = gql`
query FetchPracticeTexts($studentId: String!) {
  practiceTexts(studentId: $studentId) {
    text
    latestRating
    _id
  }
}
`;

const UPDATE_RATING_OP = gql`
mutation UpdateRating($teacherId: String!, $studentId: String!, 
                        $practiceTextId: String!, $newRating: Int!) {
  updateRating(
      teacherId: $teacherId,
      studentId: $studentId,
      practiceTextId: $practiceTextId,
      newRating: $newRating) {
        _id
        latestRating
  }
}`

const ADD_PRACTICE_TEXT_OP = gql`
    mutation AddPracticeText($teacherId: String!, $studentId: String!, $text: String!) {
        addPracticeText(teacherId: $teacherId, studentId: $studentId, text: $text) {
            _id
            text
            latestRating
        }
    }
`;

const UPDATE_EXISTING_TEXT_OP = gql`
mutation UpdateText($teacherId: String!, $studentId: String!,
                $practiceTextId: String!, $newText: String!) {
  updateText(
      teacherId: $teacherId,
      studentId: $studentId,
      practiceTextId:
      $practiceTextId,
      newText: $newText) {
          _id
          text
      }
}`

const CALC_AVG_OP = gql`
mutation CalcAverage($teacherId: String!, $studentId: String!) {
  calcAverage(teacherId: $teacherId, studentId: $studentId)
}
`

function Practice(){
    const user = useContext(UserContext);
    let params = useParams();
    let {studentId} = params;
    let [shouldScrollToEnd, setShouldScrollToEnd] = useState(false);

    /* const practiceTexts = useQuery(FETCH_PRACTICE_TEXTS_OP, {
        variables: {studentId}
    });
 */
    const [serverUpdateRating] = useMutation(UPDATE_RATING_OP);

    const [serverAddPracticeText] = useMutation(ADD_PRACTICE_TEXT_OP, {
        update(cache, {data: {addPracticeText}}) {
            console.log(`Mutation response: ${JSON.stringify(addPracticeText)}`);
            const readResult:any = cache.readQuery({
                query: FETCH_PRACTICE_TEXTS_OP,
                variables: {
                    studentId
                }
            });
            console.log(`Read result: ${JSON.stringify(readResult)}`);
            cache.writeQuery({
                query: FETCH_PRACTICE_TEXTS_OP,
                data: {
                    practiceTexts: readResult.practiceTexts.concat([addPracticeText])},
                variables: {
                   studentId
                }
            })
        }
    });

    const [updateExistingText] = useMutation(UPDATE_EXISTING_TEXT_OP);

    const [serverCalcAverage] = useMutation(CALC_AVG_OP, {
        refetchQueries: [
            FETCH_PRACTICE_TEXTS_OP,
            "FetchProgress"
        ]
    });

    const {data} = useQuery(FETCH_PRACTICE_TEXTS_OP, {
        variables: {studentId}
    });

    return (
        <section className="practice-section">
            {!data || !data.practiceTexts ?
                "":
                <section className="practice-controls">
                    <img src={reset} onClick={calcAverage} alt="Reset"/>
                </section>}
            {!data || !data.practiceTexts ?
                    "Loading ":
                    <PracticeList 
                        practiceTexts={data.practiceTexts}
                        onRate={updateRating}
                        onChangeConfirm={updateText}
                        shouldScrollToEnd={shouldScrollToEnd}
                    />}
                    <PlainInput onSubmit={addPracticeText}/>
        </section>
    );

    function updateRating(id:string, newRating:number) {
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

    function addPracticeText(text:string) {
        serverAddPracticeText({
            variables: {
                teacherId: user.id,
                studentId,
                text
            }
        });
        setShouldScrollToEnd(true);
    }

    function updateText(id:string, newText:string) {
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

    function calcAverage() {
        serverCalcAverage({
            variables: {
                teacherId: user.id,
                studentId
            }
        });
    }
}

export default Practice;