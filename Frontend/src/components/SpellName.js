const SpellName = ({spell}) => {
    

    

    return(
        <div className="spell_name">
            <h4>{spell.spellName}</h4>
            <button className="add_spell"> + </button>
        </div>
    )
}


export default SpellName;