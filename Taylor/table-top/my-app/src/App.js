import React, {Component} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }

  }

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1Ph74L9MGhIXz-Bt1jBWjA_giuhHdCBLhp2VwDEPFlr8/edit?usp=sharing',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }


  render() {

    const { data } = this.state;
    return (
      
        <div>
        {data.map(obj => {
          return (
            <div key={obj.title}>
              <h1>{obj.title}</h1>
              <p>{obj.paragraph}</p>
              <img alt={obj.title} src={obj.image} />
            </div>
          )
        })
        }</div>
      

    );
  }
}


export default App;
