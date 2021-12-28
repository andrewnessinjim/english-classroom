import "./practiceTextRow.scss";

import React from "react";
import RatingScale from "./ratingScale";

function PracticeTextRow(props) {
    return (
        <li className="practiceTextRow">
            <div className="practiceTextRow--text">{props.text}</div>
            <div className="practiceTextRow--rating">
                <RatingScale
                    currRating={props.latestRating}
                    onRate={props.onRate}/>
            </div>
        </li>
    )
}

export default PracticeTextRow;