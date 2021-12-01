import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from "react-bootstrap"
import Spell from "./Spell";

const SpellDetails = ({ selectedSchool, spells, search, handleSearching}) => {

   

    const individualSpells = spells
        .map((spell) => {
            return(
                <Spell spell={spell} key={spell.id} />
            )
        })


            
    return(
        <section className="spells">
        <h1 className="headings">List of Spells</h1>

        <div className="filtering">
        <form>
            <select onChange={(e) => {selectedSchool(e.target.value)}}>
                <option value="">Select a School</option>
                <option value="1">Abjuration</option>
                <option value="2">Conjuration</option>
                <option value="3">Divination</option>
                <option value="4">Enchantment</option>
                <option value="5">Evocation</option>
                <option value="6">Illusion</option>
                <option value="7">Necromancy</option>
                <option value="8">Transmutation</option>
            </select>

            

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