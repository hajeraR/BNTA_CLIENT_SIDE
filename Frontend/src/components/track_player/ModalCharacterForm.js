import SpellList from "./SpellList";
import { useState, useEffect } from "react";
import "./ModalCharacterForm.css"
import RaceList from "./RaceList";
import ClassList from "./ClassList";

const ModalCharacterForm = ({close, onPlayerSubmission}) => {

    
    
    const [races, setRace] = useState([]);
    const [racesIds, setRaceId] = useState(1); 
    const [classes, setClassName] = useState([]);
    const [classids, setClassId] = useState(1);
    const [name, setName] = useState('');
    const [level, setLevel] = useState();

  

    const getRaceData = () => {
        fetch("http://localhost:8080/api/v1/races")
        .then((response) => response.json())
        .then(data => setRace(data));
    }

    useEffect(getRaceData, []);

    const getClassData = () => {
        fetch("http://localhost:8080/api/v1/dndclasses")
        .then((response) => response.json())
        .then(data => setClassName(data));
    }

    useEffect(getClassData, []);
    


    
    
    
        
    const handleRaceChange = (event) => {

      setRaceId(event.target.value)

      console.log(event.target.value);
      
        
    }

   

    const handleClassNameChange = (event) => {

        setClassId(event.target.value)

        console.log(event.target.value)

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value)
        console.log(event.target.value)
    }


    const handleFormSubmission = (event) => {

        console.log("submitting form")
        event.preventDefault();



        //assign values to keys
        const newPlayer = {
            name: name,
            character_level: level,
            race_id: racesIds,
            class_id: classids
    
        }

        //calling function to update state
        onPlayerSubmission(newPlayer);

        //after submission clear form
        setName("");
        setLevel("");
        setRace([]);
        setClassName([])


    }
    
    // const spellValidation = () => {

    //     if (level < spells.level){
    //         return (
    //             <div>stop</div>
    //         )
    //     }
    // }

    return(
        <div className="Modal_background">
            <div className="Modal_content">

                    <div className="form_top">
                        <h2>Add New Player</h2>
                        <button onClick={() => close(false)}> X </button>
                    </div>


                        <form className="modal_mid_section" onSubmit={handleFormSubmission}>
                            <div className="formElement">
                                <div>
                                    <label htmlFor="name">Name: </label>
                                </div>
                                <div className="formElement__name">
                                    <input type="text" id="name" placeholder="character name" onChange={handleNameChange}/>
                                </div>
                            </div>

                            <div className="formElement">
                                <div>
                                    <label htmlFor="Level">Level: </label>
                                </div>
                                <div className="formElement__level">
                                    <input type="text" id="level" placeholder="character level" onChange={handleLevelChange}/>
                                </div>
                            </div>

                            <div className="formElement">
                                <div>
                                    <label htmlFor="race">Race: </label>
                                </div>
                                <div className="formElement__race" >
                                    <select className="selectList__placeholder" name="selectList" id="selectList" onChange ={handleRaceChange}>
                                    <option>Select your race</option>
                                    <RaceList races={races}/>
                                </select>   
                                </div>
                            </div>

                            <div className="formElement">
                                <div>
                                    <label htmlFor="class">Class: </label>
                                </div>
                                <div>
                                    <select className="selectList__placeholder" name="selectList" id="selectList" onChange ={handleClassNameChange}>
                                    <option>Select your class</option>
                                    <ClassList classes={classes}/>
                                    </select>
                                </div>
                            </div>
                           
                            <div className="formElement">
                                <div className="formElement__submit__button">
                                <input type="submit" value="SUBMIT" />
                                </div>
                            </div>

                        </form>
            
                
               
            </div>
        </div>
    )
}

export default ModalCharacterForm;