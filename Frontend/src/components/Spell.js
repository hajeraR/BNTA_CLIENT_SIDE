const Spell = ({spell}) => {
    return(
        <>
            <td>{spell.name}</td>
            <td>{spell.school_id}</td>
            <td>{spell.spell_level}</td>
        </>
    )
}

export default Spell;