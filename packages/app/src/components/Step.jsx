import React from "react";

import "./styles.css";
import UploadFile from "./UploadFile";

const Step = props => {
    const {steps, numStep} = props;

    return (
        <div className="Step">
            <textarea required id={numStep} type="text" className="Input"/>
            <UploadFile />

            <div onClick={() => {steps.push({
                description: document.getElementById(numStep).value,
                image: {url: "url", mimetype: "mimetype", encoding: "encoding"}
            })}}>Añadir</div>
        </div>
    )
}

export default Step;