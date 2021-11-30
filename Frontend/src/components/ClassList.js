import ClassName from "./ClassName";


const ClassList = ({classes}) => {

    
    const ClassComponent = classes.map(classe => {
        return(
            <ClassName classe={classe} key={classe.id}/>
        )
    })


    return(
        <>
            {ClassComponent}
        </>
        
    )

}

export default ClassList;