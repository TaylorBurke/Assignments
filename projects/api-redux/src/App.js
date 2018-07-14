import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import InputForm from './InputForm';
import Nav from './Nav';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      targets: []
    }
  }

  render() {
    return (
      <div>
        <Nav />
      
      <h2>Welcome to GeoQuery!</h2>
      <InputForm />
        <Display/>
        
       <Footer />

      </div>
    )
  }

}



export default App;
