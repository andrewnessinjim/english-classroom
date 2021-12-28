import "./practiceTextRow.scss";

import React from "react";
import RatingScale from "./ratingScale";

function PracticeTextRow(props) {
    return (
        <div className="practiceTextRow">
            <div className="practiceTextRow--text">{props.text}</div>
            <div className="practiceTextRow--rating"><RatingScale /></div>
        </div>
    )
}

export default PracticeTextRow;