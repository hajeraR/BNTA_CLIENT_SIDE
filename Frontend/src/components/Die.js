import React from "react";
import "./Die.css";

const Die = ({face, rolling}) => {

    return(
        <i className={`die fa-solid fa-dice-${face} ${rolling && "shaking"}`} />
    )
}


export default Die;