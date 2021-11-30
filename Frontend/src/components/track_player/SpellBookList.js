import SavedSpell from './SavedSpell';


const SpellBookList = ({savedSpells}) => {

    
    const SpellBookComponent = savedSpells.map(saved => {
        return(
            <SavedSpell saved={saved} key={saved.id}/>
        )
    })


    return(
        <>
            {SpellBookComponent}
        </>
        
    )

}

export default SpellBookList;