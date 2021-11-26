import {useState, useEffect} from 'react';
import WizardDetails from './components/WizardDetails'

const GameBoard = () => {
    [wizard, setWizard] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/characters")
        .then((reponse) => response.json())
        .then(data => useEffect(setWizard(data)));
    })

    return (
        wizard ?
          <>
            <WizardDetails wizard={wizard}/>
          </>
          :
          <p>Loading country...</p>
        );

}

export default GameBoard;