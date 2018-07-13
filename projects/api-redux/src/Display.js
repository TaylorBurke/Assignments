import React from 'react';
import { connect } from 'react-redux';
// import InputForm from './InputForm';
// import { getCountry } from './redux'
// import { store } from 'react-redux'


const Display = (props) => {
  console.log(props.country)
  return (

    <div>
      <h3>{props.country ? props.country.name : "Total World Population: 7.6B"}</h3>

      <img src={props.country ? props.country.flag : "http://moxymnf.com/images/design/thumbnails/CGA_model.png"} />

      <h4>{props.country ? "Capital: " : ""}{props.country ? props.country.capital : ""}</h4>

      <h4>{props.country ? "Region: " : ""}{props.country ? props.country.subregion : ""}</h4>

      <h4>{props.country ? "Ethnicity: " : ""}{props.country ? props.country.demonym : ""}</h4>

      <h4>{props.country ? "Population: " : ""}{props.country ? props.country.population : ""}</h4>

      <h4>{props.country ? "Local Name: " : ""}{props.country ? props.country.nativeName : ""}</h4>

      <h4>{props.country ? "Area: " : ""}{props.country ? props.country.area + " sq km" : ""}</h4>

    </div>
  )
}

export default connect(prevState => prevState, {})(Display);