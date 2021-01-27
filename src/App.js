import './App.css';
import React, { Component } from 'react';
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: 'asf', ame: 'Max', age: 28 },
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show Cards?
        </button>
        {persons}        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
