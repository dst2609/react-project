import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>{
return (
    <div className="UserOutput">
        <p>UserName: {props.userName} </p>
        <p>Some random text2</p>
    </div>
    )
};

export default userOutput;