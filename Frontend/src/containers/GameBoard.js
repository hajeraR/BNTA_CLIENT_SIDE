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

const [selected, setSelected] = useState(null);

const selectedSchool = (filter) => {
  setSelected(filter);
}

const filteredSpells = () => spells.filter((spell) => {
    if(!selected) {
      return(
        spell.spellName.toLowerCase().indexOf(search) > -1
        )
    } else {
  return (
    spell.spellName.toLowerCase().indexOf(search) > -1) &&
    spell.schoolID == selected;
}});

    return (
          <>
          <Navbar />
          <SpellDetails selectedSchool={selectedSchool} spells={filteredSpells(spells)} search={search} handleSearching={handleSearching} />
          </>
        );

}

export default GameBoard;