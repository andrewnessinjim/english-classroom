import "./practiceTextRow.scss";

import React, {useState, useEffect} from "react";
import RatingScale from "./ratingScale";
import autosize from "autosize";

function PracticeTextRow(props: { 
    text: string; 
    latestRating: number;
    onRate: Function;
    onChangeConfirm: (arg0: any) => void; }) {

    const [text, setText] = useState(props.text);
    let textArea: HTMLTextAreaElement | null;
    useEffect(() => {
        if(textArea) autosize(textArea);
    })
    return (
        <li className="practiceTextRow">
            <textarea
                className="practiceTextRow--input"
                value={text}
                onChange={e => setText(e.target.value)}
                onBlur={_ => handleSubmission(false)}
                onKeyDown={e => e.key === 'Enter' ? handleSubmission(true): null}
                ref={c => textArea = c}
                rows={1}
                />
            <div className="practiceTextRow--rating">
                <RatingScale
                    currRating={props.latestRating}
                    onRate={props.onRate}/>
            </div>
        </li>
    );

    function handleSubmission(shouldBlur: boolean): void {
        props.onChangeConfirm(text);
        if (shouldBlur && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }
}

export default PracticeTextRow;