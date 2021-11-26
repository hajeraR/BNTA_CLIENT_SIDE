import WizardId from "./WizardId";

const WizardDetails = ({wizard}) => {

    const id = wizard.map((id, index) => {
        return (
            <div>
                <WizardId id={id} index={index}/>
            </div>
        )
    })

    return(
    <>
        {id}
        <p>Hello</p>
    </>
    )
}

export default WizardDetails;