import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { addOne, subOne, timesTwo, divTwo, changeNum } from './redux';


class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ""
    }
      this.handleChange = this.handleChange.bind(this)

      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.props)
    this.props.changeNum( this.state.userInput )
    this.setState ({
      userInput: ""
    })
  }

  render() {
    console.log(this.state)
    return (
      
      <div>
        <h1>Number: { this.props.num }</h1>
        
        <button onClick = {this.props.addOne} >addOne</button>
        <button onClick = {this.props.subOne} >subOne</button>
        <button onClick = {this.props.timesTwo} >x2</button>
        <button onClick = {this.props.divTwo} >/2</button>
        <br/>
        <form onSubmit = {this.handleSubmit}>
          <input
            type="number"
            name="userInput"
            onChange={this.handleChange}
            placeholder="enter a new number"
            value={this.state.userInput}
          />

          <button >Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(state => state, {addOne, subOne, timesTwo, divTwo, changeNum} )(App);
