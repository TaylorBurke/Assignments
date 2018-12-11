import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Favorites from './Favorites';
// import Favorites from './Favorites';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import Information from './Information'

// new concept: GeoQuest

// with geoQuest you're able to enter a country, just like with gQuery, but
// when you return a country, a time out then makes the country info disapear, and then it calls a random property and you have to answer the question 
// for example:
// what was the population of India? okay maybe just capital city? loop it?

// probably would take about 5 to 15 hours of refactoring and additional code depending on how nice I wanted to make it

class App extends Component {
  constructor() {
    super();
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
