import SpellName from "./SpellName";


const SpellList = ({spells}) => {

    
    const spellComponent = spells.map(spell => {
        return(
            <SpellName spell={spell} key={spell.id}/>
        )
    })


    return(
        <div className="spell-list">
            {spellComponent}
        </div>
    )

}

export default SpellList;