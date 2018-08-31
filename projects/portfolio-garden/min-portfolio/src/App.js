import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
          <Header />
          <Intro />
          <Projects />
          <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
