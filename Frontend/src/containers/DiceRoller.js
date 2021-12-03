import React from "react";
import "../components/dice_roller/RollDice.css";



import RollDice4 from "../components/dice_roller/RoleDice4";
import RollDice6 from "../components/dice_roller/RoleDice6";
import RollDice8 from "../components/dice_roller/RoleDice8";
import RollDice10 from "../components/dice_roller/RoleDice10";
import RollDice12 from "../components/dice_roller/RoleDice12";
import RollDice20 from "../components/dice_roller/RoleDice20";

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