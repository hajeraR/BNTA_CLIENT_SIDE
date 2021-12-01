import { useState } from "react/cjs/react.development"
import PlayerList from "./PlayerList"
import SpellBookList from "./SpellBookList"


const SpellBookModal = ({close, player, savedSpells}) => {


    

    

    return(
        <div onClick={() => close(false)} className="spellbook_modal">
            <SpellBookList savedSpells={savedSpells}/>
            {/* <p>{savedSpells[0].spellName}</p> */}
           
        </div>
    )
    

}

export default SpellBookModal