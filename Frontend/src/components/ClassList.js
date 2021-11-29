import ClassName from "./ClassName";


const ClassList = ({classes}) => {

    
    const ClassComponent = classes.map(classname => {
        return(
            <ClassName classname={classname} key={classname.id}/>
        )
    })


    return(
        <>
            {ClassComponent}
        </>
        
    )

}

export default ClassList;