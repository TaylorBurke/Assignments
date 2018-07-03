import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      age: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value.length)
  }
  handleSubmit (e){
    e.preventDefault()
    alert(`Hello my name is ${this.state.name}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='name' value={this.state.name} name='name' onChange={this.handleChange} />
        <input type="number" placeholder='age' value={this.state.age} name='age' onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       name: ''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange (e) {
//     this.setState({name: e.target.value})
//   }
//   handleSubmit (e){
//     e.preventDefault()
//     alert(`Hello my name is ${this.state.name}`)
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.name} name='name' onChange={this.handleChange} />
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

// export default App;