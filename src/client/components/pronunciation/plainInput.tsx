import "./plainInput.scss";

import React, { useState } from "react";

function PlainInput(props){
    const [plainInput, setPlainInput] = useState("");
    return(
        <section className="plain-input">
            <input 
                placeholder="Eg. Pronunciation /prəˌnʌnsɪˈeɪʃ(ə)n/, any arbitrary text"
                className="plain-input--textBox" 
                type="text"
                value={plainInput}
                onChange={e => setPlainInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? handleSubmission(): null}
            />
        </section>
    )

    function handleSubmission() {
        props.onSubmit(plainInput);
        setPlainInput("");
    }
}

export default PlainInput;