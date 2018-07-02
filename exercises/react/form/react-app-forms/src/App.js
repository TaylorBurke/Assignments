import React, { Component } from 'react';
import './App.css';

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      fName: '',
      lName: '',

    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked: e.target.value;
    this.setState({ fName: e.target.value })
  }

  handleSelect (e) {
    this.setState({select:})
  }

  render() {
    return (
      <div>
        <form>
          <input type="text"
            placeholder="First Name"
            value={this.state.name}
            onChange={this.handleChange} />
          <input type="text"
            placeholder="First Name"
            value={this.state.name}
            onChange={this.handleChange} />
            Are you Dead?
          <input type="checkbox"
                 name='isDead'
                 checked={this.state.isDead} 
                 onChange={this.handleChange}/>
          <select>
            <option value="Anteater">Anteater</option>
            <option value="Antelope">Antelope</option>
            <option value="Shit Sandwhich">Shit Sandwhich</option>
            onChange={this.handleChange}
          </select>
        </form>

      </div>
    );
  }
}

