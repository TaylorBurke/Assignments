import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
          <Route path="/home" Component = { Home }/>
          <Route path="/about" Component = { About }/>
          <Route path="/contact" Component = { Contact }/>
      </Switch>

      </div>
    );
  }
}

export default App;
