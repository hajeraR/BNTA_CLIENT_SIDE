import SavedSpell from './SavedSpell';


const SpellBookList = ({savedSpells}) => {

    
    const SpellBookComponent = savedSpells.map(savedSpell => {
        return(
            // <SavedSpell savedSpell={savedSpell} key={savedSpell.id}/>

                <div>
                    <ul className="each__spell">{savedSpell.spellName}</ul>
                </div>
                    

        )
    })


    return(
        <div>
            {SpellBookComponent}
        </div>
        
    )

}

export default SpellBookList;