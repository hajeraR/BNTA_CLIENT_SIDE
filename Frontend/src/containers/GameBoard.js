import {useState, useEffect} from 'react';
import WizardDetails from '../Testing/WizardDetails';
import SpellDetails from '../components/SpellDetails';
import NewSpellForm from '../components/NewSpellForm';

const GameBoard = () => {

  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/spells")
    .then(response => response.json())
    .then(data => setSpells(data));
  }, [])

  const [search, setSearch] = useState(""); 

  const handleSearching = (e) => {
    setSearch(e.target.value); 
}

  const searching = (spells) => {
    return spells.filter((spell) => spell.spellName.toLowerCase().indexOf(search) > -1); 
}

const addNewSpell = (newSpell) => {
  fetch("http://localhost:8080/api/v1/spells", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSpell)
  })
      .then(
        fetch("http://localhost:8080/api/v1/spells")
        .then(response => response.json())
        .then(data => setSpells(data)));
}


    return (
          <>
          <NewSpellForm onSpellSubmission={addNewSpell} />
          <SpellDetails spells={searching(spells)} search={search} handleSearching={handleSearching} />
          </>
        );

}

export default GameBoard;