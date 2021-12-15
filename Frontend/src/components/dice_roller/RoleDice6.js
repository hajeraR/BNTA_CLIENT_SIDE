import React, {useState} from "react";
import Die from "./Die";


const RollDice6 = ({sides}) => {
    
    const [state, setState] = useState({
            die1:"six",
            rolling: false,
            diceTotal: 6,
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

            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling: false}))
            }, 1000)
    }

    return (
        <>
        <div className="dice-box">
            <div className="singleDie">
                <h4 className="dice-heading"> 6 Sided:</h4>
            <Die  face={String(die1)} rolling={rolling}/>
            </div>
            <div>
            <button id="dicebtn6" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling...." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-single"> Dice roll = {diceTotal}</h4>
            </div>
        </div>
        </>
    )
}

RollDice6.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6}
    ]
}

export default RollDice6;