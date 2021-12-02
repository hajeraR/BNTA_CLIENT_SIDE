import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Spell from "./Spell";

const SpellDetails = ({ canWizard, canWarlock, canSorcerer, canRanger, canPaladin, canDruid, canCleric, canBard, selectedSchool, spells, search, handleSearching}) => {



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

        <div className="scrolling" >
        <ul className="spells-checkbox-filter">
            <li className="item">
                <input id="bard" type="checkbox"  onChange={canBard}></input>
                <label for="bard">
                <span className="filter-img bard"></span>
                <p className="icon-name">Bard</p>
                </label>
            </li>
            <li className="item">
                <input id="cleric" type="checkbox"  onChange={canCleric}></input>
                <label for="cleric">
                <span className="filter-img cleric"></span>
                <p className="icon-name">Cleric</p>
                </label>
            </li>
            <li className="item">
                <input id="druid" type="checkbox"  onChange={canDruid}></input>
                <label for="druid">
                <span className="filter-img druid"></span>
                <p className="icon-name">Druid</p>
                </label>
            </li>
            <li className="item">
                <input id="paladin" type="checkbox"  onChange={canPaladin}></input>
                <label for="paladin">
                <span className="filter-img paladin"></span>
                <p className="icon-name">Paladin</p>
                </label>
            </li>
            <li className="item">
                <input id="ranger" type="checkbox"  onChange={canRanger}></input>
                <label for="ranger">
                <span className="filter-img ranger"></span>
                <p className="icon-name">Ranger</p>
                </label>
            </li>
            <li className="item">
                <input id="sorcerer" type="checkbox"  onChange={canSorcerer}></input>
                <label for="sorcerer">
                <span className="filter-img sorcerer"></span>
                <p className="icon-name">Sorcerer</p>
                </label>
            </li>
            <li className="item">
                <input id="warlock" type="checkbox"  onChange={canWarlock}></input>
                <label for="warlock">
                <span className="filter-img warlock"></span>
                <p className="icon-name">Warlock</p>
                </label>
            </li>
            <li className="item">
                <input id="wizard" type="checkbox"  onChange={canWizard}></input>
                <label for="wizard">
                <span className="filter-img wizard"></span>
                <p className="icon-name">Wizard</p>
                </label>
            </li>
        </ul>
        </div>

        <div className="filtering">

        <form className="search-bar-container">
                <div className="search-icon-container">
                    <FontAwesomeIcon  icon={faSearch} className="search-icon"/>
                </div>
                <input placeholder="Search Spell Name" className="search-bar" type="text" search={search} onChange={handleSearching} />
            </form>

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