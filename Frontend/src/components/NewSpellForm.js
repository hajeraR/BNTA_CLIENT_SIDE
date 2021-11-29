import { useState } from "react";

const NewSpellForm = ({onSpellSubmission}) => {

    const [spellName, setSpellName] = useState("");
    const [spellLevel, setSpellLevel] = useState(null);
    const [range, setRange] = useState("");
    const [components, setComponents] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");
    const [higherLevel, setHigherLevel] = useState("");
    const [ritual, setRitual] = useState(false);
    const [canSorcerer, setCanSorcerer] = useState(false);
    const [canWizard, setCanWizard] = useState(false);
    const [canWarlock, setCanWarlock] = useState(false);
    const [canBard, setCanBard] = useState(false);
    const [canPaladin, setCanPaladin] = useState(false);
    const [canDruid, setCanDruid] = useState(false);
    const [canCleric, setCanCleric] = useState(false);
    const [canRanger, setCanRanger] = useState(false);
    const [schoolID, setSchoolID] = useState([]);

    const handleSpellNameChange = (event) => {
        setSpellName(event.target.value);
    }

    const handleSpellLevelChange = (event) => {
        setSpellLevel(event.target.value);
    }

    const handleRangeChange = (event) => {
        setRange(event.target.value);
    }

    const handleComponentsChange = (event) => {
        setComponents(event.target.value);
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    }


    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleHigherLevelChange = (event) => {
        setHigherLevel(event.target.value);
    }
    const toggleRitual = () => {
        setRitual(value => !value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
    

        const newSpell = {
            spellName: spellName,
            spellLevel: spellLevel,
            range: range
        }

        onSpellSubmission(newSpell);

        setSpellName("");
        setSpellLevel(null);
        setRange("");
    }

    return (
        <>
            <h2>New Spell</h2>
            <form onSubmit={handleFormSubmission}>
                <div className="formElement">
                    <label htmlFor="spell-name">Spell Name: </label>
                    <input type="text" id="spell-name" value={spellName} onChange={handleSpellNameChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="spell-level">Spell Level: </label>
                    <input type="number" id="spell-level" value={spellLevel} onChange={handleSpellLevelChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="spell-range">Range: </label>
                    <input type="text" id="spell-range" value={range} onChange={handleRangeChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="spell-components">Components: </label>
                    <input type="text" id="spell-components" value={components} onChange={handleComponentsChange}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-duration">Duration: </label>
                    <input type="text" id="spell-duration" value={duration} onChange={handleDurationChange}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-description">Description: </label>
                    <input type="text" id="spell-description" value={description} onChange={handleDescriptionChange}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-higher-level">Higher Level: </label>
                    <input type="text" id="spell-higher-level" value={higherLevel} onChange={handleHigherLevelChange}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-ritual">Ritual: </label>
                    <input type="checkbox" id="spell-ritual" value={ritual} onChange={toggleRitual}/>
                </div>

                <div className="formElement">
                    <input type="submit" value="Submit Spell" />
                </div>
            </form>
        </>
    )

}

export default NewSpellForm;