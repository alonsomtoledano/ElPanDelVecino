import React from "react";

import "./styles.css";
import UploadFile from "./UploadFile";

const Step = () => {
    return (
        <div className="Step">
            <textarea required id="inputDescription" type="text" className="Input"/>
            <UploadFile />
        </div>
    )
}

export default Step;