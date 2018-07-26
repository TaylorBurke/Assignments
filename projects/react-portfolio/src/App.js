import React from 'react';
import './App.css';
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Header from './Header';

const App = function () {
  return (
    <div className="mainWrapper">
      
      <div className="headie">
        <Header />
        </div>
        <div>
        <Portfolio />

    </div>

    <div className="sidebar">
  
      <Resume />
      </div>
</div>
    
  );
}

export default App;
