import SpellList from "./SpellList";
import { useState, useEffect } from "react";
import "./ModalCharacterForm.css"
import RaceList from "./RaceList";
import ClassList from "./ClassList";

const ModalCharacterForm = ({close, onTaskSubmission}) => {

    const [spells, setSpells] = useState([]);
    const [search, setSearch] = useState('');
    const [races, setRace] = useState([]);
    const [classes, setClassName] = useState([]);
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');

    const getSpellData = () => {
        fetch("http://localhost:8080/api/v1/spells")
        .then((response) => response.json())
        .then(data => setSpells(data));
    
    }

    useEffect(getSpellData, []);

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
    


    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filter = (spells) => {
        return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
    }
        
    // const handleRaceChange = (event) => {
        
    //     setRace(event.target.value);
    // }

    // const handleClassNameChange = (event) => {
    //     setClassName(event.target.value);
    // }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    }


    const handleFormSubmission = (event) => {
        event.preventDefault();

        //assign values to keys
        const newPlayer = {
            name: name,
            level: level,
            race: races.id,
            class: classes.id
    
        }

        //calling function to update state
        onTaskSubmission(newPlayer);

        //after submission clear form
        setName("");
        setLevel("");
        setRace([]);
        setClassName([])


    }
    

    return(
        <div className="Modal_background">
            <div className="Modal_content">
                <div className="form_top">
                    <div className="title">
                        <h1>Add New Player</h1>
                    </div>
                    <button onClick={() => close(false)}> X </button>
                </div>
                
                <div className="modal_mid_section">
                    <div className="form">
                        <form>
                        <div className="formElement">
                                <label htmlFor="name">Name: </label>
                                <input type="text" id="name" placeholder="name" onChange={handleNameChange}/>
                            </div>
                            <div className="formElement">
                                <label htmlFor="Level">Level: </label>
                                <input type="text" id="level" placeholder="level" onChange={handleLevelChange}/>
                            </div>
                            <div className="formElement">
                                <label htmlFor="race">Race: </label>

                                <select name="selectList" id="selectList" onSubmit ={event => setRace(event.currentTarget.value)}>
                                <RaceList races={races}/>
                                
                                </select>
                                    
                            </div>
                            <div className="formElement">
                                <label htmlFor="class">Class: </label>
                                <select name="selectList" id="selectList" onSubmit ={event => setClassName(event.currentTarget.value)}>
                                    <ClassList classes={classes}/>
                                </select>
                            </div>
                           
                            <div className="formElement">
                                <input type="submit" value="SUBMIT" />
                            </div>
                        </form>
                    </div>
                    <div className="filter_spells">
                        <div className="search">
                            <input type="search" placeholder="search spells" onSubmit={handleSearchChange} value={search}/>
                        </div>
                        <div className="add_spells">
                            <SpellList spells={filter(spells)}/>
                        </div>
                    </div>
                    
                    
                </div>
                
               
            </div>
        </div>
    )
}

export default ModalCharacterForm;