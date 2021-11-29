import React from "react";

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
           <a href="./GameBoard.js" className="mainboxSpellsText">View All Spells </a>
           </div>
        <div className="mainboxGame">
            <span className="mainboxGameText"> Track your Game </span> </div>
    </div></div>
    </>

)}
 export default Homepage;