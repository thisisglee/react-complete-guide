import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components'

import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`


class App extends Component {
  state = {
    persons: [
      { id: 'asf', name: 'Max', age: 28 },
      { id: 'bcvbdfs',name: 'Manu', age: 29 },
      { id: 'yertuj',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons : persons})
  }

  togglePersonsHandler=()=>{
    this.setState({showPersons: !(this.state.showPersons)})
  }

  

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}/>
            )})
          }
        </div>
      )

      style.backgroundColor='red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if(this.state.persons.length <= 2){
      classes.push('red')
    }
    if(this.state.persons.length <=1){
      classes.push('bold')
    }


    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Toggle Persons
            </StyledButton>  
          {persons}        
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
