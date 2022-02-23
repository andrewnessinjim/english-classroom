import "./ratingScale.scss";

import React from "react";

const DEFAULT_MAX_RATING = 5;
const DEFAULT_CURR_RATING = 0;

function RatingScale(props: { maxRating?: any; currRating: any; onRate: Function }) {
    const maxRating = props.maxRating ? props.maxRating : DEFAULT_MAX_RATING;
    const currRating = props.currRating ? props.currRating : DEFAULT_CURR_RATING;

    return (
        <div className="rating-scale">
            {Array.from(Array(maxRating + 1).keys()).slice(1).map(
                rating => 
                    <div
                        key={rating}
                        className={`rating-scale--measure ${rating <= currRating ? "filled" : ""}`}
                        onClick={() => props.onRate(rating)}
                    >
                        <span className="value">{rating}</span>
                    </div>
                )}
        </div>
    )
}

export default RatingScale;