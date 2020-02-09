import React, {Component} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1Ph74L9MGhIXz-Bt1jBWjA_giuhHdCBLhp2VwDEPFlr8/edit?usp=sharing',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: true
    })
  }

  render() {
    return (
      <div className="App">
          <h1>React + Google Sheets Demo</h1>
      </div>
    );
  }
}


export default App;
