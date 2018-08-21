import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Fade from './Fade';
import Content from './Content';
import Headline from './Headline';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <Header />
        <Fade />
        <Toggle />
        <div className="App-intro">
          Info
        </div>

        <Content />
      </div>
    );
  }
}

export default App;
