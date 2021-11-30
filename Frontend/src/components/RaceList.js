import RaceName from "./RaceName"


const RaceList = ({races}) => {

    
    const RaceComponent = races.map(race => {
        return(
            <RaceName race={race} key={race.id}/>
        )
    })


    return(
        <>
            {RaceComponent}
        </>
        
    )

}

export default RaceList;