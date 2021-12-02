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

const [selected, setSelected] = useState(null);

const selectedSchool = (filter) => {
  setSelected(filter);
}

const [bard, setBard] = useState(false);

const canBard = (e) => {
  setBard(e.target.checked);
}

const [cleric, setCleric] = useState(false);

const canCleric = (e) => {
  setCleric(e.target.checked);
}

const [druid, setDruid] = useState(false);

const canDruid = (e) => {
  setDruid(e.target.checked);
}

const [paladin, setPaladin] = useState(false);

const canPaladin = (e) => {
  setPaladin(e.target.checked);
}

const [ranger, setRanger] = useState(false);

const canRanger = (e) => {
  setRanger(e.target.checked);
}

const [sorcerer, setSorcerer] = useState(false);

const canSorcerer = (e) => {
  setSorcerer(e.target.checked);
}

const [warlock, setWarlock] = useState(false);

const canWarlock = (e) => {
  setWarlock(e.target.checked);
}

const [wizard, setWizard] = useState(false);

const canWizard = (e) => {
  setWizard(e.target.checked);
}



const filteredSpells = () => spells.filter((spell) => {

  if(bard && cleric && selected) {
    return spell.canBard && spell.canCleric &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && druid && selected) {
    return spell.canBard && spell.canDruid &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && paladin && selected) {
    return spell.canBard && spell.canPaladin &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && ranger && selected) {
    return spell.canBard && spell.canRanger &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && sorcerer && selected) {
    return spell.canBard && spell.canSorcerer &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && warlock && selected) {
    return spell.canBard && spell.canWarlock &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && wizard && selected) {
    return spell.canBard && spell.canWizard &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && cleric) {
    return spell.canBard && spell.canCleric &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && druid ) {
    return spell.canBard && spell.canDruid &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && paladin) {
    return spell.canBard && spell.canPaladin &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && ranger ) {
    return spell.canBard && spell.canRanger &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && sorcerer ) {
    return spell.canBard && spell.canSorcerer &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && warlock ) {
    return spell.canBard && spell.canWarlock &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && wizard ) {
    return spell.canBard && spell.canWizard &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(bard && selected) {
    return spell.canBard &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(cleric && selected) {
    return spell.canCleric &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(druid && selected) {
    return spell.canDruid &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(paladin && selected) {
    return spell.canPaladin &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(ranger && selected) {
    return spell.canRanger &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(sorcerer && selected) {
    return spell.canSorcerer &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(warlock && selected) {
    return spell.canWarlock &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(wizard && selected) {
    return spell.canWizard &&
    spell.schoolID == selected &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }


 if( bard ) {
    return spell.canBard &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( cleric ) {
    return spell.canCleric &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }
  
  if( druid ) {
    return spell.canDruid &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( paladin ) {
    return spell.canPaladin &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( ranger ) {
    return spell.canRanger &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( sorcerer ) {
    return spell.canSorcerer &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( warlock ) {
    return spell.canWarlock &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if( wizard ) {
    return spell.canWizard &&
    spell.spellName.toLowerCase().indexOf(search) > -1;
  }

  if(!selected) {
    return(
      spell.spellName.toLowerCase().indexOf(search) > -1
    )} 
    else {
      return (
        spell.spellName.toLowerCase().indexOf(search) > -1) &&
        spell.schoolID == selected;
}});

    return (
          <>

          <Navbar />
          <SpellDetails canWizard={canWizard} canWarlock={canWarlock} canSorcerer={canSorcerer} canRanger={canRanger} canPaladin={canPaladin} canDruid={canDruid} canCleric={canCleric} canBard={canBard} selectedSchool={selectedSchool} spells={filteredSpells(spells)} search={search} handleSearching={handleSearching} />
          </>
        );

}

export default GameBoard;