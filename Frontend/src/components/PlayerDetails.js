import React from 'react';

const PlayerDetails = (props) => {
    return (
        <>
          <li className="player__item">
            <a className="player__details">
                <div className="player__details__info">
                <h5 className="player__details__text">{props.text}</h5>
                </div>
            </a>
          </li>

      </>
    )
}

export default PlayerDetails;

