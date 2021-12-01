import PlayerDetails from "./PlayerDetails";
import SpellBook from "./SpellBook";
import SpellBookList from "./SpellBookList";

const PlayerList = ({players, getSpellBook}) => {

    const playerComponent = players.map(player => {
        return(
            <div>
                <PlayerDetails player={player} key={player.id} getSpellBook={getSpellBook}/>
              
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