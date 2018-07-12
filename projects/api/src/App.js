import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Display from './Display';

class App extends Component {
  constructor() {
    super()
    this.state = {
      targets: [],

    }
  }

 
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/name/india?fullText=true')
    .then(response => {
      this.setState({ targets: response.data})
    })
    // try(err);
    // catch(err)
  }

  render() {
    return (
      <div class = "wrapper">
      <div className="App" class = "grid-container">
        <Display info={this.state.targets} />
      </div>
      </div>
    );
  }
}

export default App;
