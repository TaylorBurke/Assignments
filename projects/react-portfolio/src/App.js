import React from 'react';
import './App.css';
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from './Contact';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

const App = function () {
  return (
    <Router>
    <div className="mainWrapper">
      
      <div className="headie">
        <Header />
        </div>
 
        <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>

    <div className="sidebar">
  
      <Resume />
      </div>
</div>
</Router>

  );
}

export default App;
