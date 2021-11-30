const RaceName = ({race}) => {
    
    // const [racesIds, setRaceId] = useState(); 

    // setRaceId(race.id)
    

    return(
        
        <>
           
            <option value = {race.id}> {race.race_name}</option>
        </>
    )
}


export default RaceName;