import React from "react";
import GameBoard from "./GameBoard";
import Player from "../components/track_player/Player";
import DiceRoller from "./DiceRoller";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const Homepage = () => {

    const changeColour = () => {

        const darkmode = document.querySelector('.darkmode')
        const mainHeading = document.querySelector('.main-heading')
        darkmode.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
            mainHeading.classList.toggle('light-theme')

        })


    }

    return (
        <>
            <section className="homepage">

                <button className="darkmode" onClick={() => { changeColour() }}>light/dark</button>
                <span id="bannerPic">
                    <div id="homepage__banner">
                    </div>
                    <h1 className="main-heading">Welcome to DnD Spellbook</h1>
                </span>
                <main id="wrapper">
                    <div className="main-box-container">
                        <div className="main-box-spells">
                            <Link to="list-of-spells" className="main-box-spells__text">View All Spells </Link>
                        </div>
                        <div className="main-box-game">
                            <Link to="player-tracker" className="main-box-game__text"> Track your Game </Link> </div>
                    </div>
                    
                </main>

            </section>

            <i class="fab fa-d-and-d"></i>
            <hr class="rounded" />
            <section className="homepage-dice">
                <div className="dice__banner">
                    <h4 className="dice-title" >Online Dice Roller <i class="fas fa-dice-d20"></i></h4>
                </div>
                <DiceRoller />
            </section>

            <Routes>
                <Route path="list-of-spells" element={<GameBoard />} />
                <Route path="player-tracker" element={<Player />} />
            </Routes>
        </>

    )
}
export default Homepage;