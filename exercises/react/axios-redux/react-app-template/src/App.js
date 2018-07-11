import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    getTodos()
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        { this.props.todos.map(todo => {
          return (
            <Todo>{ ...todo}</Todo>
          )
        }) 
        }
      </div>
    );
  }
}

export default connect(state=>state, {getTodos}) (App)
