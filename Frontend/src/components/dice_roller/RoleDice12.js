import React, {useState} from "react";
import Die from "./Die";


const RollDice12 = ({sides}) => {
    
    const [state, setState] = useState({
            die1:"six",
            die2:"six",
            rolling: false,
            diceTotal: 12,
    });


    const { die1, die2, rolling, diceTotal } = state;

    const roll = () => {
            const newDie1 = sides[Math.floor(Math.random() * sides.length)];
            const newDie2 = sides[Math.floor(Math.random() * sides.length)];

            const total1 = Object.values(newDie1);
            const total2 = Object.values(newDie2);

            setState({
                die1: Object.keys(newDie1),
                die2: Object.keys(newDie2),
                rolling: true,
                diceTotal: total1[0] + total2[0]   
            })

            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling: false}))
            }, 1000)
    }

    return (
        <>
        <div className="dice-box-double12">
            <div>
                <h4 className="dice-heading-double"> 12 Sided: </h4>
            <Die  face={String(die1)} rolling={rolling}/>
            <Die  face={String(die2)} rolling={rolling}/>
            </div>
            <div>
            <button id="dicebtn12" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling...." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-double"> Dice roll = {diceTotal}</h4>
            </div>
        </div>
        </>
    )
}

RollDice12.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
        {d6: 0},
    ]
}

export default RollDice12;