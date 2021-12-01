import React, {useState, useEffect} from 'react';
import Modal from './Modal';
import SpellDetails from './SpellDetails';

const Spell = ({spell}) => {
    
    const [show, setShow] = useState(false);

    function schoolConverter(value) {
        if(value === 1) return 'Abjuration';
        if(value === 2) return 'Conjuration';
        if(value === 3) return 'Divination';
        if(value === 4) return 'Enchantment'
        if(value === 5) return 'Evocation'
        if(value === 6) return 'Illusion'
        if(value === 7) return 'Necromancy'
        if(value === 8) return 'Transmutation'
    }
    
    return(
        <tr className="list-of-spells" onClick={() => {setShow(true)}}>
            <td className="spell-name">{spell.spellName}</td>
            <td>{schoolConverter(spell.schoolID)}</td>
            <td>{spell.spellLevel}</td>
            <Modal title={spell.spellName} description={spell.description} onClose={() => {setShow(false)}} show={show} />
        </tr>
    )
}


export default Spell;