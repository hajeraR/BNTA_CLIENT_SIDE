import React, {useState} from "react";
import Die from "./Die";
import DiePercent from "./DiePercent";


const RollDicePercentage = ({tensSides, singlesSides}) => {
    
    const [state, setState] = useState({
            die1:"five",
            die2:"four",
            die3:"five",
            die4:"four",
            rolling: false,
            diceTotalTens: 90,
            diceTotalSingles: 9
    });


    const { die1, die2, die3, die4, rolling, diceTotalTens, diceTotalSingles } = state;


    // errors thrown due to this roll method, specifically the  .length's
    const roll = () => {
            const newDie1 = tensSides[Math.floor(Math.random() * tensSides.length)];
            const newDie2 = tensSides[Math.floor(Math.random() * tensSides.length)];
            const newDie3 = singlesSides[Math.floor(Math.random() * singlesSides.length)];
            const newDie4 = singlesSides[Math.floor(Math.random() * singlesSides.length)];

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
                diceTotalTens: total1[0] + total2[0], 
                diceTotalSingles:  total3[0] + total4[0] 
            })

            setTimeout(() => {
                setState((prevState) => ({...prevState, rolling: false}))
            }, 1000)
    }
    // potentially add an if statement with some logic : so if the dice rolls more than 100 
    // force it to roll again


    return (
        <>
        <div className="dice-box">
            <div>
                <h4 className="dice-heading-quad"> 100 Sided: </h4>
                <span className="tensDice">
            <DiePercent  face={String(die1)} rolling={rolling}/>
            <DiePercent  face={String(die2)} rolling={rolling}/>
            </span>
            <Die  face={String(die3)} rolling={rolling}/>
            <Die  face={String(die4)} rolling={rolling}/>
            </div>
            <div>
            <button id="dicebtn100" onClick={roll}  disabled={rolling}>
                {rolling ? "Rolling Dice..." : "Roll Dice?"}
            </button>
            <h4 className="dice-total-quad"> Dice roll = {diceTotalTens + diceTotalSingles}</h4>
            </div>
        </div>
        </>
    )
}

RollDicePercentage.defaultProps = {
    tensSides: [
        {one: 10},
        {two: 20},
        {three: 30},
        {four: 40},
        {five: 50},
        {d6: 0},
    ]
}

RollDicePercentage.defaultProps = {
    singlesSides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {d6: 0},
    ]
}

export default RollDicePercentage;