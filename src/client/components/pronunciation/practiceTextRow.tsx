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
                onBlur={_ => handleSubmission(false)}
                onKeyDown={e => e.key === 'Enter' ? handleSubmission(true): null}
                />
            <div className="practiceTextRow--rating">
                <RatingScale
                    currRating={props.latestRating}
                    onRate={props.onRate}/>
            </div>
        </li>
    )

    function handleSubmission(shouldBlur): void {
        props.onChangeConfirm(text);
        if (shouldBlur && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }
}

export default PracticeTextRow;