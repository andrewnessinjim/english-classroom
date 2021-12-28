import "./ratingScale.scss";

import React from "react";

function RatingScale() {
    return (
        <div className="rating-scale">
            <div className="rating-scale--measure"><span className="value">1</span></div>
            <div className="rating-scale--measure"><span className="value">2</span></div>
            <div className="rating-scale--measure"><span className="value">3</span></div>
            <div className="rating-scale--measure"><span className="value">4</span></div>
            <div className="rating-scale--measure"><span className="value">5</span></div>
        </div>
    )
}

export default RatingScale;