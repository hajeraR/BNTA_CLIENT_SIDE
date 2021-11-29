import Spell from "./Spell";


const SpellList = ({spells}) => {

    
    const spellComponent = spells.map(spell => {
        return(
            <Spell spell={spell} key={spell.id}/>
        )
    })


    //returning thetask components from above
    return(
        <div className="spell-list">
            {spellComponent}
        </div>
    )

}

export default SpellList;