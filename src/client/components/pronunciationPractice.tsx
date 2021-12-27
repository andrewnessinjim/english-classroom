import "./pronunciationPractice.scss";

import React from "react";
import {useParams} from "react-router-dom";

function PronunciationPractice() {
    let params = useParams();
    let {studentName} = params;

    return <h2>Pronunciation Practice - {`${studentName}`}</h2>
}

export default PronunciationPractice;