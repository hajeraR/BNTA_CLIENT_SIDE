import React from "react";
import "../components/RollDice.css";



import RollDice4 from "../components/RoleDice4";
import RollDice6 from "../components/RoleDice6";
import RollDice8 from "../components/RoleDice8";
import RollDice10 from "../components/RoleDice10";
import RollDice12 from "../components/RoleDice12";
import RollDice20 from "../components/RoleDice20";
import RollDicePercentage from "../components/RoleDicePercentage";

const DiceRoller = () => {

    return (

        <>
    <div className="all-dice-Wrapper">
    <RollDice4  />
    <RollDice6  />
    <RollDice8  />
    <RollDice10 />
    <RollDice12 />
    <RollDice20 />
    {/* <RollDicePercentage /> */}
    </div>
    </>
    )
}


export default DiceRoller;