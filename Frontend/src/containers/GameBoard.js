import {useState, useEffect} from 'react';
import WizardDetails from '../Testing/WizardDetails';
import SpellDetails from '../components/SpellDetails';

const GameBoard = () => {
    const [wizard, setWizard] = useState(null);

    // useEffect(() => {
    //     fetch("http://localhost:8080/api/v1/schools")
    //     .then((response) => response.json())
    //     .then(data => setWizard(data));
    // })

  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("")
    .then(response => response.json())
    .then(data => setSpells(data));
  })

  const [search, setSearch] = useState(""); 

  const handleSearching = (e) => {
    setSearch(e.target.value); 
}

const searching = (spells) => {
  return spells.filter((spell) => spell.spell_name.toLowerCase().indexOf(search) > -1); 
}


    return (
        wizard ?
          <>
            <WizardDetails wizard={wizard}/>
          </>
          :
          <>
          <SpellDetails spells={searching(spells)} search={search} handleSearching={handleSearching} />
          </>
        );

}

export default GameBoard;