import PlayerDetails from "./PlayerDetails";

const PlayerList = ({players}) => {

    const playerComponent = players.map(player => {
        return(
            <PlayerDetails player={player} key={player.id}/>
        )
    })



    return(

        <div>
            {playerComponent}
        </div>
    )
}

export default PlayerList