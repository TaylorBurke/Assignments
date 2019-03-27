import React, { Component } from 'react';
import logo from './haze.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className=".btn-sm"><h2>Test Button</h2></button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Word Cloud
          </a>
        </header>
      </div>
    );
  }
}

export default App;
