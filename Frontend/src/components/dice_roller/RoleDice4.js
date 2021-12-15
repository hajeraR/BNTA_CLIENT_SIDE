import React, {useState} from "react";
import Die from "./Die";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fab} from '@fortawesome/free-solid-svg-icons'


const RollDice4 = ({sides}) => {
    
    const [state, setState] = useState({
            die1:"four",
            rolling: false,
            diceTotal: 4,
    });


    const { die1, rolling, diceTotal } = state;

    const roll = () => {
            const newDie1 = sides[Math.floor(Math.random() * sides.length)];

            const total1 = Object.values(newDie1);

            setState({
                die1: Object.keys(newDie1),
                rolling: true,
                diceTotal: total1[0]
            })
    }

    return (
        <>
        <div className="dice-box">
            <div className="singleDie">
                <h4 className="dice-heading"> 4 Sided:</h4>
            <Die  id="die" face={String(die1)} rolling={rolling}/>
            </div>
            <div >
            <button id="dicebtn4" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling...." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-single"> Dice roll = {diceTotal}</h4>
            </div>
        </div>
        </>
    )
}

RollDice4.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4}
    ]
}

export default RollDice4;