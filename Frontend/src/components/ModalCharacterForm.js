import SpellList from "./SpellList";
import { useState, useEffect } from "react";
import "./ModalCharacterForm.css"
import RaceList from "./RaceList";
import ClassList from "./ClassList";

const ModalCharacterForm = ({close, onPlayerSubmission}) => {

    const [spells, setSpells] = useState([]);
    const [search, setSearch] = useState('');
    const [races, setRace] = useState([]);
    const [racesIds, setRaceId] = useState(1); 
    const [classes, setClassName] = useState([]);
    const [classids, setClassId] = useState(1);
    const [name, setName] = useState('');
    const [level, setLevel] = useState();

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
    
    
        
    const handleRaceChange = (event) => {

      setRaceId(event.target.value)

      console.log(event.target.value);
      
        
        //     if(event.target.value === 'Dwarf') return setRaceId(1);
        //     if(event.target.value === 'Halfling') return setRaceId(2);
        //     if(event.target.value === 'Half-elf') return setRaceId(3);
        //     if(event.target.value === 'Human') return setRaceId(4);
        //     if(event.target.value === 'Elf') return setRaceId(5);
        //     if(event.target.value === 'DragonBorn') return setRaceId(6);
        //     if(event.target.value === 'Half-Orc') return setRaceId(7);
        //     if(event.target.value === 'Tiefling') return setRaceId(8);
        //     if(event.target.value === 'Gnome') return setRaceId(9);

        // console.log(racesIds)
       
        
    }

   

    const handleClassNameChange = (event) => {

        setClassId(event.target.value)

        console.log(event.target.value)

        // if(event.target.value === 'Bard') return setClassId(1);
        // if(event.target.value === 'Cleric') setClassId(2);
        // if(event.target.value === 'Druid') setClassId(3);
        // if(event.target.value === 'Paladin') setClassId(4);
        // if(event.target.value === 'Sorceror') setClassId(5);
        // if(event.target.value === 'Warlock') setClassId(6);
        // if(event.target.value === 'Wizard') setClassId(7);
        // if(event.target.value === 'Ranger') setClassId(8);

        // console.log(classids);
     
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
                        <form onSubmit={handleFormSubmission}>
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

                                <select name="selectList" id="selectList" onChange ={handleRaceChange}>
                                <option></option>
                                <RaceList races={races}/>
                                
                                </select>
                                    
                            </div>
                            <div className="formElement">
                                <label htmlFor="class">Class: </label>
                                <select name="selectList" id="selectList" onChange ={handleClassNameChange}>
                                <option></option>
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
                            <input type="search" placeholder="search spells" onChange={handleSearchChange} value={search}/>
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