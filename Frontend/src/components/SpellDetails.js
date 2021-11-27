import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
        <form >
            <div className="search-icon-container">
            <FontAwesomeIcon  icon={faSearch} className="search-icon"/>
                 </div>
            <input placeholder="Search" className="search-bar" type="text" search={search} onChange={handleSearching} />
          </form>

        <div className="spells-container">
          <table className="spell-table">
            <tr>
                <th>Spell Name</th>
                <th>Class Availability</th>
                <th>Spell Level</th>
            </tr>
            <tr>
                {individualSpells}
            </tr>
          </table>
        </div>

        </section>
    )
}

export default SpellDetails;