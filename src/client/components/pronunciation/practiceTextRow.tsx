import "./practiceTextRow.scss";

import React from "react";
import StarRating from "./starRating";

function PracticeTextRow(props) {
    return (
        <div className="practiceTextRow">
            <div className="practiceTextRow--text">{props.text}</div>
            <div className="practiceTextRow--rating"><StarRating/></div>
        </div>
    )
}

export default PracticeTextRow;