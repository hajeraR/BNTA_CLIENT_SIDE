import { useState } from "react/cjs/react.development"
import PlayerList from "./PlayerList"
import SpellBookList from "./SpellBookList"


const SpellBookModal = ({close, player, savedSpells}) => {


    

    

    return(
        
        <div className={`modal-container ${close ? "show" : ""}`} onClick={() => close(false)}>
            <section className="player__spells__modal">
        
                    <div className="player__individual__spells">
                        <SpellBookList savedSpells={savedSpells}/>
                    </div>
             
            </section>
    </div>
    )


}

export default SpellBookModal