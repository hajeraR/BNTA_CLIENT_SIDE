import PlayerDetails from "./PlayerDetails";
import SpellBook from "./SpellBook";
import SpellBookList from "./SpellBookList";

const PlayerList = ({players, getSpellBook, savedSpells, deletePlayer}) => {

    const playerComponent = players.map(player => {
        return(
            <>
                <PlayerDetails player={player} key={player.id} getSpellBook={getSpellBook} savedSpells={savedSpells} deletePlayer={deletePlayer}/>  
            </>
            
        )
    })



    return(

        <>
            {playerComponent}
        </>
    )
}

export default PlayerList