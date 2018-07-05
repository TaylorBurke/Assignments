import React, { Component } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component = { Home }/>
          <Route path="/about" component = { About }/>
          <Route path="/contact" component = { Contact }/>
      </Switch>

      </div>
    );
  }
}

export default App;