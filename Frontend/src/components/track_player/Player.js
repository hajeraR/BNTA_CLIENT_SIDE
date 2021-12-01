import React from 'react';
import { useState, useEffect } from 'react';
import './Player.css';
import ModalCharacterForm from './ModalCharacterForm';
import PlayerList from './PlayerList';

import {
    Link
  } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import SpellBook from './SpellBook';

const Player = () => {

    const [modalShown, setModalShown] = useState(false);
    const [players, setPlayer] = useState([]);
    const [savedSpells, setSavedSpells] = useState([]);

    const getPlayerData = () => {
        fetch("http://localhost:8080/api/v1/characters")
        .then(response => response.json())
        .then(data => setPlayer(data))
    }

    useEffect(getPlayerData, []);
    
    const addNewPlayer = (newPlayer) => {
        fetch("http://localhost:8080/api/v1/characters", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlayer)
        })
        .then(getPlayerData)
    }

    const SpellBookData = (id) => {

        fetch(`http://localhost:8080/api/v1/spellbook/${id}`)
        .then(response => response.json())
        .then(data => {setSavedSpells(data); console.log(data)})
        
    }

    // useEffect(SpellBookData, []);
    
    const deletePlayer = (id) => {
        fetch(`http://localhost:8080/api/v1/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(newPlayer)
        })
        .then(getPlayerData)
    }
    


    return (
        <>
        <Navbar />
         
            
        <div> 
        <h1 className="player__title">
            Player Tracker!
        </h1>
        </div>

        <div className="player">

            <div className="player__button__container">
                <button className="player__button" onClick={() => {setModalShown(true);}}>Add Player</button>
                {modalShown && <ModalCharacterForm close={setModalShown} onPlayerSubmission={addNewPlayer}/>}
            </div>

            <h3>List of all current players</h3>

            <div className="player__container">
                <div className="player__wrapper">
                  <ul className="player__items">
                      
                     
                    <PlayerList players={players} savedSpells={savedSpells} getSpellBook={SpellBookData} deletePlayer={deletePlayer}/>
                      
                  </ul>
                </div>

            </div>

            <div className="player-container-display">

            </div>
            
        </div>
        </>
    )
}

export default Player;
