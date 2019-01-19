import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent.js';
import CharComponent from './CharComponent.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      length: 0,
      text: ''
    }
  }
  textChangeHandler = (event) => {
    const lengthText = event.target.value.length;
    this.setState({
      length: lengthText,
      text:event.target.value
    });
  } 
  removeCharHandler = (index) => {
    let charsToChange = this.state.text.split('');
    charsToChange.splice(index,1);
    this.setState({
      text: charsToChange.join('')
    });
  }
  render() {

    let chars = this.state.text.split('').map((char, index) => {
      return (
        <CharComponent char={char} click={() => this.removeCharHandler(index)}></CharComponent>
      )
    })

    return (
      <div className="App">
        <input type="text" placeholder="Enter some text to begin" onChange={this.textChangeHandler} value={this.state.text}/>
        <p>Current Length: {this.state.length}</p>
        <ValidationComponent textLength={this.state.length}></ValidationComponent>
        {chars}
      </div>
    );
  }
}

export default App;
