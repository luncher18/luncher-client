import React from "react";


const Schools = (props) => {
    console.log( props)
        return(
        <div>
        {props.schools.map(schools => (
            <div id ={schools.id} key={schools.id}>
                <div>
                    <p>{schools.schoolName}</p>
                    <p>{schools.state}</p>
                    <p>{schools.zip}</p>
                    <p>{schools.fundsNeeded}</p>
                    <p>{schools.contact}</p>
                </div>
                <button onClick={(event, id= schools.id) => props.delete(event, id)}>Remove School</button>
            </div>
        ))}
        </div>
    );
}

export default (Schools);