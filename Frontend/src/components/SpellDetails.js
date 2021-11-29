import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Modal from './modal/Modal'
import Spell from "./Spell"

const SpellDetails = ({spells, search, handleSearching}) => {

    const individualSpells = spells
        .map((spell) => {
            return(
                <Spell spell={spell} key={spell.id} />
            )
        })

    return(
        <section className="spells">
        <h2 className="headings">List of Spells</h2>

        <div className="filtering">
            <button></button>
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
                <th>Class Availability</th>
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