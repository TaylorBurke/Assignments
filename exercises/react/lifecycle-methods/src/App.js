import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "rebeccapurple",
      width: "100px"

    }
  }
  componentDidMount() {
    window.addEventListener('keypress', (e) => {
      if(e.key === 'a'){
        this.setState({
          color: 'cornflowerblue'
        })
      } else if (e.key === 'g') {
        this.setState(prevState => ({
          width: prevState.width === '100px' ? '50px' : '100px'
      }))
    }
  })
}

componentWillUnmount(){
  window.removeEventListener('keypress')
}

  render() {
    return (
      <div style={{
        backgroundColor: this.state.color,
        color: 'white',
        width: this.state.width 
      }}>
        Hello
      </div>
    );
  }
}

export default App;
