import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Login from './Login';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">RPGoals</h1>
            <div className="App-intro">
              Grow your character in the game and in real life.
        </div>
          </header>

          <Nav />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/balance" component={Nav} />
          </Switch>


          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
