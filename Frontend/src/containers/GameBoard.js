import {useState, useEffect} from 'react';
import SpellDetails from '../components/list_of_spells/SpellDetails.js';
import Navbar from '../components/navbar/Navbar.js';

const GameBoard = () => {

  const [spells, setSpells] = useState([]);

  const getSpellData = () => {
    fetch("http://localhost:8080/api/v1/spells")
    .then(response => response.json())
    .then(data => setSpells(data));
  }

  useEffect(getSpellData, [])

  const [search, setSearch] = useState(""); 

  const handleSearching = (e) => {
    setSearch(e.target.value); 
}

  const searching = (spells) => {
    return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
}

    return (
          <>
          <Navbar />
          <SpellDetails spells={searching(spells)} search={search} handleSearching={handleSearching} />
          </>
        );

}

export default GameBoard;