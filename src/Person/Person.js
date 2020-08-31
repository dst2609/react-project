import React from 'react';
import classes from './Person.css'

const person = (props) =>{
    return (
        <div className = {classes.Person}>
            <p onClick={props.click}>I am {props.name}! I am {props.age} years old lol.</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
};

export default person;