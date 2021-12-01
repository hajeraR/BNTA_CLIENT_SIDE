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

return (
<>
<section className="homepage">
    <header id="bannerPic">
        <div id="homepage__banner"></div>
        <h1 className="main-heading">Welcome to DnD Spellbook</h1>
    </header>

    <main id="wrapper">
    <div className="main-box-container">
        <div className="main-box-spells">
           <Link to="list-of-spells" className="main-box-spells__text">View All Spells </Link>
        </div>

        <div className="main-box-game">
            <Link to="player-tracker" className="main-box-game__text"> Track your Game </Link> 
        </div>
    </div>
    </main>

</section>
    
    <section className="homepage-dice">
        <div className="dice__banner"> <h4 className="dice-heading" > Online Dice Roller </h4> </div>
        <DiceRoller />
    </section>
    
    <Routes>
        <Route path="list-of-spells" element={<GameBoard />} />
        <Route path="player-tracker" element={<Player/>}/>
    </Routes>
    </>

)}
 export default Homepage;