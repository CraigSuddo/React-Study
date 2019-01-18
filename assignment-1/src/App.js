import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput.js'
import UserOutput from './UserOutput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput name="Craig"/>
        <UserOutput name="Oliver"/>
      </div>
    );
  }
}

export default App;
