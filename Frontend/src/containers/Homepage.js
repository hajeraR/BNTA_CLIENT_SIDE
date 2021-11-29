import React from "react";
import GameBoard from "./GameBoard";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import RollDice from "../components/RoleDice";
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
            <span className="mainboxGameText"> Track your Game </span> </div>
    </div></div>
    <div>
    <RollDice />
    </div>
    
    <Routes>
        <Route path="list-of-spells" element={<GameBoard />} />
    </Routes>
    </>

)}
 export default Homepage;