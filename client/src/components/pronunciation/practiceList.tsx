import "./practiceList.scss";

import React, {useEffect} from "react";

import PracticeTextRow from "./practiceTextRow";


function PracticeList(props: { shouldScrollToEnd?: boolean; practiceTexts?: any; onRate?: any; onChangeConfirm?: any; }) {
    const {practiceTexts, onRate, onChangeConfirm} = props;
    let textsEnd: HTMLDivElement | null;
    useEffect(() => {
        if(textsEnd && props.shouldScrollToEnd) {
            textsEnd.scrollIntoView({ behavior: "smooth" });
        }
    });
    return (
        <ol className="practice-list-list">
            {practiceTexts.map(
                (                practice: { text: any; latestRating: any; _id: any; }) => 
                    <PracticeTextRow
                        text={practice.text}
                        latestRating={practice.latestRating}
                        key={practice._id}
                        onRate={(rating: any) => onRate(practice._id, rating)}
                        onChangeConfirm={(text: any) => onChangeConfirm(practice._id, text)}
                    />
            )}
            <div style={{ float:"left", clear: "both" }}
                ref={(el) => { textsEnd = el; }}>
            </div>
        </ol>
    )
}

export default PracticeList;