import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import InputForm from './InputForm'


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
      <h2>Welcome to GeoQuery!</h2>
      <InputForm />
        <Display/>
       

      </div>
    )
  }

}



export default App;
