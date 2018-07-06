import React, { Component } from 'react';
import './App.css';
import GenRando from './GenRando';
import axios from 'axios';



class App extends Component {
  constructor() {
    super()

    this.state = {
        color: '' 
    }
  }

  componentDidMount(){
    axios.get('http://www.colr.org/json/color/random').then(response => {
     this.setState({color: `#${response.data.new_color}`});
    })
  }

  render() {
    return (
      <div>
        <GenRando color={this.state.color}/>
      </div>
    );
  }
}

export default App;
