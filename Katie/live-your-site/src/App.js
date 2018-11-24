import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CredSection from './CredSection';
import GetStoked from './GetStoked';
import Freebs from './Freebs';
import Ends from './Endorsements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Life Coach Katie</h3>
          <h4>Sweet ass dream coach babe</h4>
        </header>
        <div className = "site">
          <div className="container">
            <h2>Step into your life with confidence!</h2>
            <CredSection />
            <GetStoked />
            <Freebs />
            <Ends />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
