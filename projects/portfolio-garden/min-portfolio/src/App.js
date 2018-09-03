import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.contactRef = null;
    this.setContactRef = el => this.contactRef = el;
    this.scrollToElement = this.scrollToElement.bind(this);
  }
 
  scrollToElement(el){
    const{x, y } = el.getBoundingClientRect();
    console.log(x, y);
    window.scrollTo({top: y, left: x, behavior: "smooth"});
  }
  render() {
    return (
      <Router>
      <div className="App">
          <Header scrollToContact={(e)=> this.scrollToElement(this.contactRef)}/>
          <Intro />
          <Projects />
          <Footer setContactRef = {this.setContactRef}/>
      </div>
      </Router>
    );
  }
}

export default App;
