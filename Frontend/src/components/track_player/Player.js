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

    const changeColour = () => {

        const player = document.querySelector('.player')
        const darkmode = document.querySelector('.darkmode')
        const details = document.querySelectorAll('.details')
        const playerButton = document.querySelector('.player__button')
        const playerTitle = document.querySelector('.player__title')
        const playerSpell = document.querySelector('.player__spells__button')
        const playerSpellBook = document.querySelector('.player__details__spellbook')
        const modal = document.querySelector('.player__button__container')

        darkmode.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
            details.forEach((detail) => {
                detail.classList.toggle('light-theme')
            })
            player.classList.toggle('light-theme')
            playerButton.classList.toggle('light-theme')
            playerTitle.classList.toggle('light-theme')
            playerSpellBook.classList.toggle('light-theme')
            playerSpell.classList.toggle('light-theme')
            // modal.classList.toggle('light-theme')
            
        })


    }

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
        <button className="darkmode" onClick={()=>{changeColour()}}>light/dark</button>
        <h1 className="player__title">
            Player Tracker 
        </h1>
        </div>

        <div className="player">

            <div className="player__button__container">
                <button className="player__button" onClick={() => {setModalShown(true);}}>Add Player</button>
                {modalShown && <ModalCharacterForm close={setModalShown} onPlayerSubmission={addNewPlayer}/>}
            </div>

            <div className="player__list__title">
                <h3>List of all current players</h3>
            </div>
            

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
