import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return (
        <div className ='UserOutput'>
            <p>Hello</p>
            <p>I'm {props.name}</p>
        </div>
    );

    
}


export default UserOutput;