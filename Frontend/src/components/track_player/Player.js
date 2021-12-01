import React from 'react';
import { useState, useEffect } from 'react';
import './Player.css';
import ModalCharacterForm from './ModalCharacterForm';
import PlayerList from './PlayerList';
import Navbar from "../navbar/Navbar";

const Player = () => {

    const [modalShown, setModalShown] = useState(false);
    const [players, setPlayer] = useState([]);
    

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

    return (
        <>
        <Navbar />
        <section className="player-tracking">
        <header> 
            <h1 className="player__title">Player Tracker!</h1>
        </header>

        <main className="player">

            <div className="player__button__container">
                <button className="player__button" onClick={() => {setModalShown(true);}}>
                    Add Player
                </button>
                {modalShown && <ModalCharacterForm close={setModalShown} onPlayerSubmission={addNewPlayer}/>}
            </div>

            <h2>List of all players</h2>


            <div className="player__container">
                <div className="player__wrapper">
                  <ul className="player__items">  
                    <PlayerList players={players}/>     
                  </ul>
                </div>
            </div>

            <div className="player-container-display"></div>
        
        </main>

        </section>
        </>
    )
}

export default Player;
