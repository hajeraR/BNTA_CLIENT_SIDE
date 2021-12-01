import React from 'react';
import { useState } from 'react';
import SpellBook from './SpellBook';


const PlayerDetails = ({player}) => {

  const [show, setShow] = useState(false);
  

    return (
        <>
          <li className="player__item">
            <div className="player__details">
              <h5>
                Name: {player.name}
              </h5>
              <h5>
                Race: <p>{player.race_id}</p>
              </h5>
              <h5>
                Class: <p>{player.class_id}</p>
              </h5>
              <h5>
                Level: <p>{player.character_level}</p>
              </h5>
              <h5>
                <p onClick={() => {setShow(true)}} >Spellbook:</p>
                <SpellBook onClose={() => {setShow(false)}} show={show} player={player}/>
              </h5>
            </div>
          </li>

      </>
    )
}

export default PlayerDetails;

