import {useState, useEffect} from 'react';
import WizardDetails from '../components/WizardDetails';

const GameBoard = () => {
    const [wizard, setWizard] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/schools")
        .then((response) => response.json())
        .then(data => setWizard(data));
    })

    const [spells, setSpells] = useState([]);

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