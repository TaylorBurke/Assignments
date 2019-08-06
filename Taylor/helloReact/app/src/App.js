import React from 'react';
import logo from './te.png';
import './App.css';
import Hidden from './hidden';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hidden className="text"/>
      </header>

    </div>
  );
}

export default App;
