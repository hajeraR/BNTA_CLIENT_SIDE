import PlayerDetails from "./PlayerDetails";
import SpellBook from "./SpellBook";
import SpellBookList from "./SpellBookList";

const PlayerList = ({players, getSpellBook, savedSpells}) => {

    const playerComponent = players.map(player => {
        return(
            <div>
                <PlayerDetails player={player} key={player.id} getSpellBook={getSpellBook} savedSpells={savedSpells}/>
              
            </div>
            
        )
    })



    return(

        <div>
            {playerComponent}
        </div>
    )
}

export default PlayerList