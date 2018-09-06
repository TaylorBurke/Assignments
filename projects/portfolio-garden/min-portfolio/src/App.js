import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Badges from './Badges/Badges';
import Footer from './Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.contactRef = null;

    this.setContactRef = el => this.contactRef = el;

    this.setProjectRef = el => this.projectRef = el;

    this.projectRef = null;

    this.scrollToElement = this.scrollToElement.bind(this);
  }
 
  scrollToElement(el){
    const{x, y } = el.getBoundingClientRect();
    window.scrollTo({top: y, left: x, behavior: "smooth"});
  }



  render() {
    return (
      <Router>
      <div className="App">
          <Header 
          scrollToContact={(e)=> this.scrollToElement(this.contactRef)}
          scrollToProject={(e)=> this.scrollToElement(this.projectRef)}/>
          <Intro />
          <Badges />
          <Projects setProjectRef = {this.setProjectRef}/>
          <Footer setContactRef = {this.setContactRef}/>
      </div>
      </Router>
    );
  }
}

export default App;
