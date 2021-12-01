const SpellName = ({spell}) => {
    

    // const handleAddSpell = (event) => {

    //     console.log("submitting form")
    //     event.preventDefault();



    //     //assign values to keys
    //     const newSpell = {
    //         characterID: ,
    //         spellID: spell.id,
    //         spellIsKnown: true
    
    //     }

    //     //calling function to update state
    //     UpdateSpellBook(newSpell);



    // }
    

    return(
        <div className="spell_name">
            <h4>{spell.spellName}</h4>
            <button className="add_spell" > + </button>
        </div>
    )
}


export default SpellName;