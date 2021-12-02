import {useState, useEffect} from 'react';
import SavedSpell from './SavedSpell';
import SpellList from './SpellList';
import SpellBookList from './SpellBookList';


const SpellBook = (props, {UpdateSpellBook}) => {

    const [search, setSearch] = useState('');
    const [spells, setSpells] = useState([]);
    const [characterId, setCharacterId] = useState('');
    const [spellId, setSpellId] = useState([]);


    // useEffect(savedSpells, []);

    const handleCharacterIdChange = (event) => {
        setCharacterId(event.target.value);
        
    }

    const handleSpellChange = (event) => {
        setSpellId(event.target.value);
        
    }

    const escapeKeyClose = (e) => {
        if((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', escapeKeyClose);
        return function cleanup() {
            document.body.removeEventListener('keydown', escapeKeyClose);
        }
    }, [])

    // const handleSearchChange = (event) => {
    //     setSearch(event.target.value);
    // }

    // const filter = (spells) => {
    //     return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
    // }

    const getSpellData = () => {
        fetch("http://localhost:8080/api/v1/spells")
        .then((response) => response.json())
        .then(data => setSpells(data));
    
    }

    useEffect(getSpellData, []);


    const handleAddSpell = (event) => {

        console.log("submitting form")
        event.preventDefault();


        const newSpell = {
            characterID: characterId,
            spellID: spellId,
            spellIsKnown: true
    
        }

        UpdateSpellBook(newSpell);

    }

    

    return(
        <div className={`modal-container ${props.show ? "show" : ""}`} onClick={props.onClose}>
            <section className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="filter_spells">
                        <form >
                        <div >
                            {/* <input type="search" placeholder="search spells" onChange={handleSearchChange} value={search}/> */}
                            <label htmlFor="name">CharacterID: </label>
                            <input type="text" id="characterId" placeholder="CharacterId" onChange={handleCharacterIdChange}/>
                        </div>

                        <div className="add_spells">
                            <select onChange={handleSpellChange}>
                            <SpellList spells={spells} />
                            </select>
                        </div>
                        <div className="formElement">
                            <input type="submit" value="SUBMIT" />
                                
                        </div>

                        </form>
                        
                    </div>
                   
            </section>
        </div>
    )
}
export default SpellBook;