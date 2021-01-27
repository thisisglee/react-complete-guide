import classes from './app.module.css';
import React, { Component } from 'react';


import Person from "./Person/Person";


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


    let persons = null;
    let btnClass = [classes.Button]

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

      btnClass.push(classes.Red)
    }

    const assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass.join(' ')}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}        
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
