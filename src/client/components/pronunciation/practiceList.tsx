import "./practiceList.scss";

import React, {useEffect} from "react";

import PracticeTextRow from "./practiceTextRow";


function PracticeList(props) {
    const {practiceTexts, onRate, onChangeConfirm} = props;
    let textsEnd;
    useEffect(() => {
        if(textsEnd && props.shouldScrollToEnd) {
            textsEnd.scrollIntoView({ behavior: "smooth" });
        }
    });
    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                practice => 
                    <PracticeTextRow
                        text={practice.text}
                        latestRating={practice.latestRating}
                        key={practice._id}
                        id={practice._id}
                        onRate={rating => onRate(practice._id, rating)}
                        onChangeConfirm={text => onChangeConfirm(practice._id, text)}
                    />
            )}
            <div style={{ float:"left", clear: "both" }}
                ref={(el) => { textsEnd = el; }}>
            </div>
        </ol>
    )
}

export default PracticeList;