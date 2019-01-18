import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput.js'
import UserOutput from './UserOutput.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Craig"
    }
  }
  usernameChangedHandler = (event) => {
    console.log(event);
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler}/>
        <UserOutput name={this.state.username} />
        <UserOutput name="Oliver" />
      </div>
    );
  }
}

export default App;
