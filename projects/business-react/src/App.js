import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';
// import Nav from './Nav.js';
import Info from './Info.js';
import Box from './Product.js';



function App(){
  const backgroundColors = ["limegreen", "gray", "purple", "orange"]
  const boxes = backgroundColors.map((color, index) => <Box key = {color + index} backgroundColor = {color}/>)
  const msi = {
      name: "Mech Suits Inc",
      tagline: "We build Siren Class Mech Suits",
      marketCap: "$34m",
      ventureFund: "Susqahana", 
  }
  const footie = {
    address: "420 W",
    email: "squanch@msi.com"
  }
  return (
    <div>
      {boxes}

      <Info {...msi}/>
      {/* <Info name="Mech Suits Inc" tagline="Siren Class" marketCap="$6m" ventureFund="Mesquito"/> */}
      <Footer {...footie}/>
      {/* <Footer address="420 W 69 S SLC, UT"/> */}
    </div>
  )
}


// const arr = [1, 2, 3, 4, 5];

// const pNodes = arr.map(num => {
//   const p = document.createElement("p");
//   p.innerHTML = num;
//   return p;
// });

// const body = document.querySelector("body");
// pNodes.forEach(node => body.appendChild(node));



// const component = props => {
//   const p = document.createElement("p");
//   p.innerHTML = props.text;
//   return p;
// }

// const textArr = ["run", "jewels"];
// const pElements = textArr.map(text => {
//   return component({text})
// })

// pElements.forEach(pElements => body.appendChild(text));

export default App;
