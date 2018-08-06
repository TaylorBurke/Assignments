import React, { Component } from 'react';
import './App.css';
import Wrap from './Wrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Faq from './Faq';
import Nav from './Nav';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <Router>
        
      <div className="App">
      <Switch>
          <Route exact path ="/" Component = {Home} />
          <Route exact path ="/faq" Component = {Faq} />
        </Switch> 
        <header className="App-header">
          <h1 className="App-title">Give thyself time to learn something new and good, and cease to be whirled around.</h1>
          <Nav />
        </header>
        <p className="App-intro">
          Show us what you got!
        </p>

        <Wrap/>
        <div className = "footer">
        <Nav />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
