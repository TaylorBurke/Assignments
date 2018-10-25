import React, { Component } from 'react';
import logo from './pinwheel.png';
import './App.css';
import Input from './Input';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            What are you breathing?
          </h2>

          <Input />


      </div>
    );
  }
}

export default App;
