import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Headline from './Headline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <Header />
        <div className="App-intro">
          Info
        </div>

        <Content />
      </div>
    );
  }
}

export default App;
