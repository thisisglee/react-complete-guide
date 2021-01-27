import './App.css';
import React, { Component } from 'react';

import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'


class App extends Component {
  state = {
    text: 'han v beere!'
  };


  
  
  changeTextHandler = event =>{
    this.setState({text : event.target.value})
    
  }

  render() {

    const charscomp = this.state.text.split('').map(c => {
      if(c===' '){
        c = '-'
      }
      return(
        <CharComponent alphabet={c}/> 
      )
    })

    return (
      <div className="App">
        <input type="text" onChange={(event)=> this.changeTextHandler(event)} />
        <p>{this.state.text}</p>  
        <Validation textLength={(this.state.text).length}/>
        {charscomp}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
