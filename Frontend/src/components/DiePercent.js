import React from "react";
import "./Die.css";

const DiePercent = ({face, rolling}) => {

    return(
        <i className={`die fas fa-dice-${face} ${rolling && "shaking"}`} />
    )
}


export default DiePercent;