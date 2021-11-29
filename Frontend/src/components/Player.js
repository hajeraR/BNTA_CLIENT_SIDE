import React from 'react';
import './Player.css';
import PlayerDetails from './PlayerDetails';

const Player = () => {

    const [modalShown, setModalShown] = useState(false);
    
    return (
        <div className="player">
            <h1>List of all players</h1>

            <div className="player__button__container">
                <button className="player__button" onClick={() => {setModalShown(true);}}>Add Player</button>
                {modalShown && <ModalCharacterForm close={setModalShown}/>}
            </div>

            <div className="player__container">
                <div className="player__wrapper">
                  <ul className="player__items">
                      <PlayerDetails
                      text="This will contain the name, class, race, level, health of a character | click to check their spellbook"
                      />
                      <PlayerDetails 
                      text="This will contain the name, class, race, level, health of a character | click to check their spellbook"
                      />
                  </ul>
                </div>

            </div>

            <div className="player-container-display">

            </div>
            
        </div>
    )
}

export default Player;
