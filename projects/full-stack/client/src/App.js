import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Form from './Form';
import Nav from './Nav';
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sleep Bank</h1>
          <p className="App-intro">
            Track your sleep and see your account balance in one place.
        </p>
        </header>
        <Nav />

        <Form />

        <Footer />
      </div>
    );
  }
}

export default App;
