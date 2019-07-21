import React from 'react';

const ValidationComponent = (props) => {
    const requiredLength = 5;
    const strLength = props.input.length;
    let msg = '';
    if (strLength === requiredLength) msg = 'The input is OK';
    else if(strLength < requiredLength) msg= 'The input is too short'
    else msg = 'The input is too long';
    return <p>{msg}</p>
}

export default ValidationComponent;