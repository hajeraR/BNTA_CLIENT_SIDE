import React from 'react';

const PlayerDetails = ({player}) => {
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
                <a>Spellbook:</a>
              </h5>
            </div>
          </li>

      </>
    )
}

export default PlayerDetails;

