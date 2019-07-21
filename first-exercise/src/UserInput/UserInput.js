import React from 'react';

const UserInput = (props) => {
    const style = {
        padding: '16px',
        border: '1px solid tomato',
        textAlign:'center',
        fontSize: '18px',
        marginTop:'10px',
        marginBottom:'16px'
    }
    return(
        <input style={style} onChange = {props.changeInputHandler} type ="text" value={props.input}/>   
    );
}

export default UserInput;