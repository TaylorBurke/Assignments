import React, { Component } from 'react';
import './App.css';
import Adjacent from './Adjacent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Give thyself time to learn something new and good, and cease to be whirled around.</h1>
        </header>
        <Adjacent />
      </div>
    );
  }
}

export default App;
