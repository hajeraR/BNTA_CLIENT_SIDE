import SpellList from "./SpellList";
import { useState, useEffect } from "react";

const ModalCharacterForm = ({close}) => {

    const [spells, setSpells] = useState([]);
    const [search, setSearch] = useState('');

    const getSpellData = () => {
        fetch("http://localhost:8080/api/v1/spells")
        .then((response) => response.json())
        .then(data => setSpells(data));
    
    }

    useEffect(getSpellData, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filter = (spells) => {
        return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
    }
        
    

    return(
        <div className="Modal_background" >
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
                                <label htmlFor="race">Race: </label>
                                <input type="text" id="race" placeholder="race" />
                            </div>
                            <div className="formElement">
                                <label htmlFor="class">Class: </label>
                                <input type="text" id="class" placeholder="class" />
                            </div>
                            <div className="formElement">
                                <label htmlFor="name">Name: </label>
                                <input type="text" id="name" placeholder="name" />
                            </div>
                            <div className="formElement">
                                <label htmlFor="Level">Level: </label>
                                <input type="text" id="level" placeholder="level" />
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