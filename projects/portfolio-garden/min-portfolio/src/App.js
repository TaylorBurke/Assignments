import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Headline from './Headline';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Headline />
        <Header />
        <Intro />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
