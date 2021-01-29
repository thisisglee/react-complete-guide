import './App.css';
import React, { Component } from 'react';
import Person from "./Person/Person";

import UserInput from './UserInput/UserInput'
import UserOutput from "./UserOutput/UserOutput";

// import { useState } from "react";

// function App() {

//   const [persons, setPersons] = useState([
//     {name:"Gurleen" ,age:"22"},
//     {name:"Harleen" ,age:"30"},
//     {name:"Harmeet" ,age:"34"}
//   ])

//   const switchNameHandler = ()=> {
//     persons[0].name = "gurleen singh"
//     setPersons([
//       {name:"Gurleen Singh" ,age:"22"},
//       {name:"Harleen" ,age:"30"},
//       {name:"Harmeet" ,age:"34"}
//     ])
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {persons.map(person => <Person name={person.name} age={person.age} />)}
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    username: [
      { name: 'Max'},
      { name: 'Manu'},
      { name: 'Stephanie'},
      { name: 'Natalie'}
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  paraChangeHandler = event => {
    this.setState({
      username: [        
      { name: 'bunty'},
      { name: 'Manu'},
      { name: 'Stephanie'},
      { name: 'Natalie'}
      ]
    });
  }

  paraInputChangeHandler = event => {
    this.setState({
      username: [        
        { name: event.target.value},
        { name: 'Manu'},
        { name: 'Stephanie'},
        { name: 'Natalie'}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={()=> this.switchNameHandler("maxii")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Glee')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <UserInput username={this.state.username[0].name} inputChanged={this.paraInputChangeHandler}/>
        <UserOutput username={this.state.username[0].name} />
        <UserOutput username={this.state.username[1].name} paraChange={this.paraChangeHandler} />
        <UserOutput username={this.state.username[2].name} />
        <UserOutput username={this.state.username[3].name} />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
