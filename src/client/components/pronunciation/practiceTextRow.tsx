import "./practiceTextRow.scss";

import React, {useState} from "react";
import RatingScale from "./ratingScale";

function PracticeTextRow(props) {
    const [text, setText] = useState(props.text);

    return (
        <li className="practiceTextRow">
            <input
                className="practiceTextRow--input"
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={_ => handleSubmission()}
                onKeyDown={e => e.key === 'Enter' ? handleSubmission(): null}
                />
            <div className="practiceTextRow--rating">
                <RatingScale
                    currRating={props.latestRating}
                    onRate={props.onRate}/>
            </div>
        </li>
    )

    function handleSubmission(): void {
        props.onChangeConfirm(text);
        document.activeElement.blur();
    }
}

export default PracticeTextRow;