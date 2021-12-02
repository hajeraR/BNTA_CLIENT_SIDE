const SpellName = ({spell}) => {
    


    

    return(
        <>
            <option value={spell.id}>{spell.spellName}</option>
            {/* <button className="add_spell" > + </button> */}
        </>
    )
}


export default SpellName;