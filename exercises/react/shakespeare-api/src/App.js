import React, { Component } from 'react';
import './App.css';
import Api from './Api';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello c-137</h1>
        <Navbar />
       <Api />
      </div>
    );
  }
}

export default App;
