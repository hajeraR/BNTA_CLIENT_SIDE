import {useState, useEffect} from 'react';
import SavedSpell from './SavedSpell';
import SpellList from './SpellList';
import SpellBookList from './SpellBookList';


const SpellBook = (props) => {

    const [search, setSearch] = useState('');
    const [spells, setSpells] = useState([]);


    // useEffect(savedSpells, []);


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

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filter = (spells) => {
        return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
    }

    const getSpellData = () => {
        fetch("http://localhost:8080/api/v1/spells")
        .then((response) => response.json())
        .then(data => setSpells(data));
    
    }

    useEffect(getSpellData, []);


    // const postToBook = (newSpell) => {
    //     fetch("http://localhost:8080/api/v1/spellbook", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newSpell)
    //     })
    //     .then(SpellBookData)
    // }


    return(
        <div className={`modal-container ${props.show ? "show" : ""}`} onClick={props.onClose}>
            <section className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="filter_spells">
                        <div className="search">
                            <input type="search" placeholder="search spells" onChange={handleSearchChange} value={search}/>
                        </div>
                        <div className="add_spells">
                            <SpellList spells={filter(spells)} />
                        </div>
                        
                    </div>
                   
            </section>
        </div>
    )
}
export default SpellBook;