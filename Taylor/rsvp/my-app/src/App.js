import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';

function App() {


  return (
    <div className="App">

      <a target="blank" style={{ textDecoration: "none" }} href="https://docs.google.com/forms/d/e/1FAIpQLSdm3nXK3HXZNAo2LQVgKeXpqj3Shj9Ydd4P87uS3DHkUixzIA/viewform?usp=sf_link">
        <Button variant="contained" color="primary" className="button">RSVP for Missouri</Button>
      </a>

      <br />

      <a target="blank" style={{ textDecoration: "none" }} href="https://docs.google.com/forms/d/e/1FAIpQLSdm3nXK3HXZNAo2LQVgKeXpqj3Shj9Ydd4P87uS3DHkUixzIA/viewform?usp=sf_link">
        <Button variant="contained" color="primary" className="button">RSVP for Utah</Button></a>

    </div>
  );
}

export default App;
