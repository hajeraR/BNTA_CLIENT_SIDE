import SavedSpell from './SavedSpell';


const SpellBookList = ({savedSpells}) => {

    
    const SpellBookComponent = savedSpells.map(savedSpell => {
        return(
            // <SavedSpell savedSpell={savedSpell} key={savedSpell.id}/>
            <li>{savedSpell.spellName}</li>
        )
    })


    return(
        <div>
            {SpellBookComponent}
        </div>
        
    )

}

export default SpellBookList;