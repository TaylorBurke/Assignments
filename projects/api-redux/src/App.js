import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Favorites from './Favorites';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import Information from './Information'


class App extends Component {
  constructor() {
    super()
    this.state = {
      targets: []
    }
  }

  render() {
    return (


      <div className="App">
        <Nav />
        
        <Switch>
          <Route exact path="/" component={Display} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/information" component={Information} />
        </Switch>
        <Footer />

      </div>
    )
  }

}



export default App;
