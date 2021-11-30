import React, {useState} from "react";
import Die from "./Die";


const RollDice20 = ({sides}) => {
    
    const [state, setState] = useState({
            die1:"five",
            die2:"five",
            die3:"five",
            die4:"five",
            rolling: false,
            diceTotal: 20,
    });


    const { die1, die2, die3, die4, rolling, diceTotal } = state;

    const roll = () => {
            const newDie1 = sides[Math.floor(Math.random() * sides.length)];
            const newDie2 = sides[Math.floor(Math.random() * sides.length)];
            const newDie3 = sides[Math.floor(Math.random() * sides.length)];
            const newDie4 = sides[Math.floor(Math.random() * sides.length)];

            const total1 = Object.values(newDie1);
            const total2 = Object.values(newDie2);
            const total3 = Object.values(newDie3);
            const total4 = Object.values(newDie4);

            setState({
                die1: Object.keys(newDie1),
                die2: Object.keys(newDie2),
                die3: Object.keys(newDie3),
                die4: Object.keys(newDie4),
                rolling: true,
                diceTotal: total1[0] + total2[0] + total3[0] + total4[0] 
            })

            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling: false}))
            }, 1000)
    }

    return (
        <>
        <div className="dice-box">
            <div>
                <h4 className="dice-heading-quad"> 20 Sided: </h4>
            <Die  face={String(die1)} rolling={rolling}/>
            <Die  face={String(die2)} rolling={rolling}/>
            <Die  face={String(die3)} rolling={rolling}/>
            <Die  face={String(die4)} rolling={rolling}/>
            </div>
            <div>
            <button id="dicebtn20" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling....." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-quad"> Dice roll = {diceTotal}</h4>
            </div>
        </div>
        </>
    )
}

RollDice20.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {d6: 0},
    ]
}

export default RollDice20;