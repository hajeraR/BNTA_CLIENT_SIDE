import React from "react";
import GameBoard from "./GameBoard";
import Player from "../components/track_player/Player";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import RollDice from "../components/dice_roller/RoleDice";
const Homepage = () => {

return (
<>
<span id="bannerPic">
<div id="homepageBanner">
</div>
<h1 className="Mainheading">Welcome to DnD Spellbook</h1>
</span>
<div id="wrapper">
    <div className="MainBoxContainer">
        <div className="mainboxSpells">
           <Link to="list-of-spells" className="mainboxSpellsText">View All Spells </Link>
           </div>
        <div className="mainboxGame">
            <Link to="player-tracker" className="mainboxGameText"> Track your Game </Link> </div>
    </div></div>
    <div>
    <RollDice />
    </div>
    
    <Routes>
        <Route path="list-of-spells" element={<GameBoard />} />
        <Route path="player-tracker" element={<Player/>}/>
    </Routes>
    </>

)}
 export default Homepage;