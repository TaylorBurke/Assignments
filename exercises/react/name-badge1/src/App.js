import React, { Component } from 'react';
import './App.css';
import NameBadger from './NameBadger'

class App extends Component {
  constructor(){
    super();

    this.state={
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      favoritefood: '',
      placeOfBirth: '',
      aboutYourself: '',
      data: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.fillBadge = this.fillBadge.bind(this)
  }
  

  handleChange(e){
    this.setState({
    
      [e.target.name]: e.target.value

    })

  }

  fillBadge(e){
    e.preventDefault();
    const obj={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      placeOfBirth: this.state.placeOfBirth,
      favoritefood: this.state.favoritefood,
      aboutYourself: this.state.aboutYourself
    }
    this.setState(prevState => {
      return{
      data: [...prevState.data, obj]
    }
  })}

  


  render() {
    const myBadges =this.state.data.map(val =>{
      return <div className='border'>
      <h1>Hello, I am:</h1>
      <div className='badge'>
      <p>Firstname: {val.firstName}</p>
      <p>Last Name: {val.lastName}</p>
      <p>Email: {val.email}</p>
      <p>Phone #: {val.phone}</p>
      <p>Place Of Birth: {val.placeOfBirth}</p>
      <p>Favorite Food: {val.favoritefood}</p>
      <p>Tell us About you: {val.aboutYourself}</p>
      </div>
      </div>
    })
    return (
      <div>
          <NameBadger/>

      </div>
    );
  }
}

export default App;