import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {Link} from "react-router-dom";


import Spell from "./Spell";

const SpellDetails = ({spells, search, handleSearching}) => {


    const changeColour = () => {

        const darkmode = document.querySelector('.darkmode')
        const spells = document.querySelector('.spells')
        const headings = document.querySelector('.headings')
        const content = document.querySelector('.modal-content')
        const closeBTN = document.querySelector('.modal-close-btn')
        darkmode.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
            spells.classList.toggle('light-theme')
            headings.classList.toggle('light-theme')
            content.classList.toggle('light-theme')
            closeBTN.classList.toggle('light-theme')
    
        })
    
    
    }

    const individualSpells = spells
        .map((spell) => {
            return(
                <Spell spell={spell} key={spell.id} />
            )
        })


    return(
        <section className="spells">
        <button className="darkmode" onClick={()=>{changeColour()}}>light/dark</button>
        <h1 className="headings">List of Spells</h1>

        <Link to="..">Back to home</Link>
        <Link to="../player-tracker">Track Player</Link>


        <div className="filtering">
        <form>
            <div className="search-icon-container">
            <FontAwesomeIcon  icon={faSearch} className="search-icon"/>
                 </div>
            <input placeholder="Search" className="search-bar" type="text" search={search} onChange={handleSearching} />
          </form>
        </div>

        <div className="spells-container">

            <table className="spell-table">
                <thead>
                    <tr className="table-header">
                <th>Spell Name</th>
                <th>School Availability</th>
                <th>Spell Level</th>
                    </tr>
                </thead>
                    {individualSpells}
            </table>
        </div>
        </section>
    )
}

export default SpellDetails;