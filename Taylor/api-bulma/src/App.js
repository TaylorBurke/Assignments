import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "react-bulma-components/full";
import { Columns } from "react-bulma-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button />

          <Columns>
  <Columns.Column size="one-fifth">20%</Columns.Column>
  <Columns.Column>80%</Columns.Column>
</Columns>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
