import "./starRating.scss";

import React from "react";
import star from "../../icons/star.svg";

function StarRating() {
    return (
        <div>
            <span><img className="star" src={star} alt="Star"/></span>
            <span><img className="star" src={star} alt="Star"/></span>
            <span><img className="star" src={star} alt="Star"/></span>
            <span><img className="star" src={star} alt="Star"/></span>
            <span><img className="star" src={star} alt="Star"/></span>
        </div>
    )
}

export default StarRating;