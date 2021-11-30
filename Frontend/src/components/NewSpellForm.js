import { useState } from "react";

const NewSpellForm = ({onSpellSubmission}) => {

    const [spellName, setSpellName] = useState("");
    const [spellLevel, setSpellLevel] = useState();
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
    const [schoolID, setSchoolID] = useState();

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

    const toggleSorcerer = () => {
        setCanSorcerer(value => !value);
    }

    const toggleWizard = () => {
        setCanWizard(value => !value);
    }

    const toggleWarlock = () => {
        setCanWarlock(value => !value);
    }

    const toggleBard = () => {
        setCanBard(value => !value);
    }

    const togglePaladin = () => {
        setCanPaladin(value => !value);
    }

    const toggleDruid = () => {
        setCanDruid(value => !value);
    }

    const toggleCleric = () => {
        setCanCleric(value => !value);
    }

    const toggleRanger = () => {
        setCanRanger(value => !value);
    }

    const handleSchoolIDChange = (event) => {
        setSchoolID(event.target.value);
    }


    const handleFormSubmission = (event) => {
        event.preventDefault();
    
        const newSpell = {
            spellName: spellName,
            spellLevel: spellLevel,
            range: range,
            components: components,
            duration: duration,
            description: description,
            higherLevel: higherLevel,
            ritual: ritual,
            canSorcerer: canSorcerer,
            canWizard: canWizard,
            canWarlock: canWarlock,
            canBard: canBard,
            canPaladin: canPaladin,
            canDruid: canDruid,
            canCleric: canCleric,
            canRanger: canRanger,
            schoolID: schoolID
        }

        onSpellSubmission(newSpell);

        setSpellName("");
        setSpellLevel();
        setRange("");
        setComponents("");
        setDuration("");
        setDescription("");
        setHigherLevel("");
        setRitual(false);
        setCanSorcerer(false);
        setCanWizard(false);
        setCanWarlock(false);
        setCanBard(false);
        setCanPaladin(false);
        setCanDruid(false);
        setCanCleric(false);
        setCanRanger(false);
        setSchoolID();
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
                    <label htmlFor="spell-sorcerer">Sorcerer: </label>
                    <input type="checkbox" id="spell-sorcerer" value={canSorcerer} onChange={toggleSorcerer}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-wizard">Wizard: </label>
                    <input type="checkbox" id="spell-wizard" value={canWizard} onChange={toggleWizard}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-warlock">Warlock: </label>
                    <input type="checkbox" id="spell-warlock" value={canWarlock} onChange={toggleWarlock}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-bard">Bard: </label>
                    <input type="checkbox" id="spell-bard" value={canBard} onChange={toggleBard}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-paladin">Paladin: </label>
                    <input type="checkbox" id="spell-paladin" value={canPaladin} onChange={togglePaladin}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-druid">Druid: </label>
                    <input type="checkbox" id="spell-druid" value={canDruid} onChange={toggleDruid}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-cleric">Cleric: </label>
                    <input type="checkbox" id="spell-cleric" value={canCleric} onChange={toggleCleric}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-ranger">Ranger: </label>
                    <input type="checkbox" id="spell-ranger" value={canRanger} onChange={toggleRanger}/>
                </div>

                <div className="formElement">
                    <label htmlFor="spell-school-id">School: </label>
                    <input type="number" id="spell-school-id" value={schoolID} onChange={handleSchoolIDChange}/>
                </div>


                <div className="formElement">
                    <input type="submit" value="Submit Spell" />
                </div>
            </form>
        </>
    )

}

export default NewSpellForm;