import React, { Component } from 'react';
import './App.css';

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
        <form className="form" onSubmit={this.fillBadge}>
          <br/>
          <br/>
           <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name'/>
           <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name'/>
           <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email'/>
           <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='Phone Number'/>
           <input type='text' name='placeOfBirth' value={this.state.placeOfBirth} onChange={this.handleChange} placeholder='Place Of Birth'/>
           <input type='text' name='favoritefood' value={this.state.favoritefood} onChange={this.handleChange} placeholder='Favorite Food'/>
           <input type='text' name="aboutYourself" value={this.state.aboutYourself} onChange={this.handleChange} placeholder='About Yourself'/>
           <button>Submit</button> 
        </form>
          <br/>
          <br/>
          <br/>
        <div>
          <p>{myBadges}</p>
        </div>
      </div>
    );
  }
}

export default App;