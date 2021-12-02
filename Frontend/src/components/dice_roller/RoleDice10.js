import React, {useState} from "react";
import Die from "./Die";


const RollDice10 = ({sides}) => {
    
    const [state, setState] = useState({
            die1:"five",
            die2:"five",
            rolling: false,
            diceTotal: 10,
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
        <div className="dice-box-double10">
            <div>
                <h4 className="dice-heading-double"> 10 Sided: </h4>
            <Die  face={String(die1)} rolling={rolling}/>
            <Die  face={String(die2)} rolling={rolling}/>
            {/* <Die  face={String(die2)} rolling={rolling}/> */}
            </div>
            <div>
            <button id="dicebtn10" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling...." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-double"> Dice roll = {diceTotal}</h4>
            </div>
        </div>
            
            {/* <Die  face="three"/>
            <Die  face="four"/>
            <Die  face="five"/>
            <Die  face="six"/> */}
        </>
    )
}

RollDice10.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {d6: 0},
    ]
}

export default RollDice10;