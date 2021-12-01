import { useState } from "react/cjs/react.development"
import PlayerList from "./PlayerList"
import SpellBookList from "./SpellBookList"


const SpellBookModal = ({close, player, savedSpells}) => {


    const validate = () => {

    if(player.name === savedSpells.characterName){
        
    return <p>{savedSpells.spellName}</p>

    }
}
    return(
        <div onClick={() => close(false)} className="spellbook_modal">
            
            {validate}
           
        </div>
    )
    

}

export default SpellBookModal