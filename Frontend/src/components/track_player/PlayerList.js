import PlayerDetails from "./PlayerDetails";
import SavedSpell from "./SavedSpell";

const PlayerList = ({players}) => {

    const playerComponent = players.map(player => {
        return(
            <div>
                <PlayerDetails player={player} key={player.id}/>
                <SavedSpell player={player} key={player.id}/>
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