import React, { Component } from 'react';
//import styled from 'styled-components';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';
//import Validation from './Validation/Validation';
//import Char from './Char/Char';


// const StyledButton = styled.button `
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 2px solid blue;
//   padding: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'hotpink' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      {id: '001', name: 'first', age: 55},
      {id: '002', name: 'second', age: 56},
      {id: '003', name: 'third', age: 57}
    ],
    otherState: 'some other value',
    showPersons : false,
    usrNm: 'Checking',
    userInputNew: ''
  
  }

// switchNameHandler = (newName) => {
//   //console.log('Was Clicled!!')
//   // NOT THIS: this.state.persons[0].name = 'Owner';
//   this.setState({
//     persons: [
//     {name: newName, age: 55},
//     {name: 'second', age: 56},
//     {name: 'third', age: 99}
//   ],
//   usrNm: 'Checking'
//   })
// }

inputAssignmentChangeHandler = (event) => {
  this.setState({userInputNew: event.target.value});
}



nameChangedHandler = (event, id) => {
  
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons});
}

  // inputNameChangedHandler = (event) => {
  //   this.setState({usrNm: event.target.value});
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInputNew.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInputNew: updatedText});
  }


  render() {
    // const charList = this.state.userInputNew.split('').map((ch, index)=> {
    //   return <Char 
    //   character={ch} 
    //   key={index}
    //   clicked={() => this.deleteCharHandler(index)} />;
    // });

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '2px solid blue',
    //   padding: '10px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              
              changed={(event) => this.nameChangedHandler(event, person.id)} /> 
          })}
        </div> 
      );

      btnClass = classes.Red;
    }


    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);  //classes = ['red']
    }
    if (this.state.persons.length <=1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }


    return (

      <div className={classes.App}>
        <h1>Hello World, React!</h1>
        <p className={assignedClasses.join(' ')}>This is really working! LOL</p>
        <button 
          className={btnClass}
          // style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}



        {/* <UserInput 
          changed = {this.inputNameChangedHandler} 
          currentName={this.state.usrNm} />
          
        <UserOutput userName={this.state.usrNm} />
        <UserOutput userName="Two" />
        <UserOutput userName="Three" /> */}

        {/* <hr />
        <label>Assignment 2</label> <br />
        <input 
          type="text" 
          onChange={this.inputAssignmentChangeHandler} 
          value={this.state.userInputNew} />

        <p>{this.state.userInputNew}</p>
        <Validation inputLength={this.state.userInputNew.length} />
        {charList} */}
      </div>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World, React!'));
  }
}

export default App;
