import "./pronunciation.scss";

import React from "react";
import {useParams} from "react-router-dom";
import PlainInput from "./plainInput";
import PracticeList from "./practiceList";

function Pronunciation() {
    let params = useParams();
    let {studentName} = params;

    return (
        <section className="pronunciation">
            <h2 className="pronunciation--heading">Pronunciation Practice - {`${studentName}`}</h2>
            <PracticeList/>
            <PlainInput onSubmit={value => console.log(`${value} was submitted`)}/>
        </section>
    )
}

export default Pronunciation;