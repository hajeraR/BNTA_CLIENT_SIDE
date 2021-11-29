import React, {useState} from 'react';
import Modal from './modal/Modal';

const Spell = ({spell}) => {
    const [show, setShow] = useState(false);

    

    return(
        <tr onClick={() => {setShow(true)}}>
            <td>{spell.spellName}</td>
            <td>{spell.schoolID}</td>
            <td>{spell.spellLevel}</td>
            <Modal title={spell.spellName} description={spell.description} onClose={() => {setShow(false)}} show={show} />
        </tr>
   
    )
}

export default Spell;