const Spell = ({spell}) => {

    //returning individual tasks with its properties
    return (
        <div className="spell">
            <h3>{spell.spellName}</h3>
            <button className="add_spell"> + </button>
            
        </div>
    )
}


export default Spell;