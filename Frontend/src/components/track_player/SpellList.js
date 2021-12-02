import SpellName from "./SpellName";


const SpellList = ({spells, UpdateSpellBook}) => {

    
    const spellComponent = spells.map(spell => {
        return(
            <SpellName spell={spell} key={spell.id} UpdateSpellBook={UpdateSpellBook}/>
        )
    })


    return(
        <>
            {spellComponent}
        </>
    )

}

export default SpellList;