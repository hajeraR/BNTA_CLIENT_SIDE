import React from 'react';
import { useState } from 'react';
import SpellBook from './SpellBook';
import './Player.css';
import SavedSpell from './SavedSpell';
import SpellBookModal from './SpellBookModal';


const PlayerDetails = ({player, getSpellBook, savedSpells, deletePlayer}) => {

  const [show, setShow] = useState(false);
  const [showSpells, setShowSpells] = useState(false);
  const [alive, setAlive] = useState("alive");

  const raceIDConverter = (value) => {
    if(value === 1) return "Dwarf";
    if(value === 2) return "Halfling";
    if(value === 3) return "Half-Elf";
    if(value === 4) return "Human";
    if(value === 5) return "Elf";
    if(value === 6) return "Dragonborn";
    if(value === 7) return "Half-Orc";
    if(value === 8) return "Tiefling";
    if(value === 9) return "Gnome";
  }

const classIDConverter = (value) => {
  if(value === 1) return "Bard"
  if(value === 2) return "Cleric"
  if(value === 3) return "Druid"
  if(value === 4) return "Paladin"
  if(value === 5) return "Sorcerer"
  if(value === 6) return "Warlock"
  if(value === 7) return "Wizard"
  if(value === 8) return "Ranger"
}

  const changeText = (text) => setAlive(text);


    return (
        <>
          
          <ul className="player__item">
            <div className="player__details">
              <div className="player__delete__button">
                <button className="delete__player" onClick={() => changeText("dead")}> {alive}</button>
              </div>
              <div className="player__details__info">
                <h5>
                  Name: {player.name}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Race: {raceIDConverter(player.race_id)}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Class: {classIDConverter(player.class_id)}
                </h5>
              </div>

              <div className="player__details__info">
                <h5>
                  Level: {player.character_level}
                </h5>
              </div>

              <div className="player__details__info">
                  <h5 className="player__details__spellbook" onClick={() => {setShow(true)}} >Spellbook</h5>
                  <SpellBook onClose={() => {setShow(false)}} show={show} player={player}/>
              </div>
              
              {/* <div>
              
                  <SpellBookModal onClose={() => {setShowSpells(false)}} showSpells={showSpells} player={player} savedSpells={savedSpells}/>
                <button onClick={() => {getSpellBook(player.id); setShow(true)}}>we'll remove this button</button>
              </div> */}
              

              <div className="player__spells__button__container">
                <button className="player__spells__button" onClick={() => {setShowSpells(true); getSpellBook(player.id)}} value={savedSpells.spellname}>Player Spells</button>
                {showSpells && <SpellBookModal close={setShowSpells} player={player} savedSpells={savedSpells}/>}
                {savedSpells.spellname}
            </div>

            </div>
          </ul>

      </>
    )
}

export default PlayerDetails;

