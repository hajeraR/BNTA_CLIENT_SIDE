import React from 'react';
import { useState } from 'react';
import SpellBook from './SpellBook';
import './Player.css';


const PlayerDetails = ({player, getSpellBook}) => {

  const [show, setShow] = useState(false);
  

    return (
        <>
          <ul className="player__item">
            <div className="player__details">
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
                  <SpellBook onClose={() => {setShow(false)}} show={show} player={player}/>
              </div>

              <button onClick={() => getSpellBook(player.id)}>we'll remove this button</button>
            </div>
          </ul>

      </>
    )
}

export default PlayerDetails;

