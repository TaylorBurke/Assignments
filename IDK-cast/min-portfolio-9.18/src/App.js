import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Pitch from './Pitch/Pitch';
import Footer from './Footer/Footer';
import Bar from './Bar/Bar';
import Bar1 from './Bar1/Bar1';
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
          <Bar />
          <Projects setProjectRef = {this.setProjectRef}/>

          <Pitch />
          <Bar1 />
          <Intro />
          {/* <Footer setContactRef = {this.setContactRef}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
