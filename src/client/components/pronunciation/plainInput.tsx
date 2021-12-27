import "./plainInput.scss";

import React from "react";

function PlainInput(){
    return(
        <section className="plain-input">
            <input 
                placeholder="Eg. Pronunciation /prəˌnʌnsɪˈeɪʃ(ə)n/, any arbitrary text"
                className="plain-input--textBox" 
                type="text"/>
        </section>
    )
}

export default PlainInput;