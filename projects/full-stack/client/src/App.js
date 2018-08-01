import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Form from './Form';
import Balance from './Balance';
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
            <h1 className="App-title">Welcome to Sleep Bank</h1>
            <p className="App-intro">
              Track your sleep in one place.
        </p>
          </header>

          <Nav />

          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/balance" component={Balance} />
          </Switch>


          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
