import React from 'react';
import classes from './Person.css';

const person = (props) => {
  
    // const rnd = Math.random();
    //  console.log(rnd);
    // if(rnd>0.9){
    //     throw new Error('Something went wrong ');
    // }
    return (<div className={classes.Person} >
                <p onClick={props.click}> I'm {props.name}! and I am {props.age}</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name} />            
            </div>)
}

export default person;