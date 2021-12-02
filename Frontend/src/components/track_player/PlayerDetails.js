import React from 'react';
import { useState } from 'react';
import SpellBook from './SpellBook';
import './Player.css';
import SavedSpell from './SavedSpell';
import SpellBookModal from './SpellBookModal';


const PlayerDetails = ({player, getSpellBook, savedSpells, deletePlayer, UpdateSpellBook}) => {

  const [show, setShow] = useState(false);
  const [showSpells, setShowSpells] = useState(false);
  const [alive, setAlive] = useState("alive");


  const changeText = (text) => setAlive(text);

  


    return (
        <>
          <ul className="player__item">
            <div className="player__details">
              <div>
                <button className="delete_player" onClick={() => changeText("dead")}> {alive}</button>
              </div>
              <div className="player__details__info">
                <h5>
                  Name: {player.name}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Race: {player.race_id}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Class: {player.class_id}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Level: {player.character_level}
                </h5>
              </div>

              <div className="player__details__info">
                  <h5 onClick={() => {setShow(true)}} >Spellbook:</h5>
                  <SpellBook onClose={() => {setShow(false)}} show={show} player={player} UpdateSpellBook={UpdateSpellBook}/>
              </div>
              
              {/* <div>
              
                  <SpellBookModal onClose={() => {setShowSpells(false)}} showSpells={showSpells} player={player} savedSpells={savedSpells}/>
                <button onClick={() => {getSpellBook(player.id); setShow(true)}}>we'll remove this button</button>
              </div> */}
              

              <div >
                <button  onClick={() => {setShowSpells(true); getSpellBook(player.id)}} value={savedSpells.spellname}>Add Player</button>
                {showSpells && <SpellBookModal close={setShowSpells} player={player} savedSpells={savedSpells}/>}
                {savedSpells.spellname}
            </div>

            </div>
          </ul>

      </>
    )
}

export default PlayerDetails;

