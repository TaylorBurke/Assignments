import React from 'react';
import './App.css';
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const App = function () {
  return (
    <div className="mainWrapper">
      
      <div className="headie">
        <Portfolio />

    </div>

    <div className="sidebar">
      
      <h2>Taylor Burke</h2>
      <h3>MERN Developer</h3>
      <p>I am a creator and a problem solver. I believe that one day my software will change the world.</p>
      <Resume />
      </div>
</div>
    
  );
}

export default App;
