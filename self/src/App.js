import React, { Component } from 'react';
import logo from './haze.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header spacePad">
          <span className="spacePad"><img src={logo}/></span>
          <span className="Fade"></span>
          <p>
            Tell A story With Anime
          </p>
          <span className="spacePad">
          <button className=".btn-sm"><h2>Test Button</h2></button>
          </span>
          <a
            className="App-link spacePad"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get More Info
          </a>
        </header>
      </div>
    );
  }
}

export default App;
