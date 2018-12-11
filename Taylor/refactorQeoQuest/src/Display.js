import React from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import { addToFavorites } from './redux';
import ErrorBoundary from './ErrorBoundary';
// import { store } from 'react-redux'


// can we utilize more apis like wikipedia? something???? lets put it down there




const Display = (props) => {
  return (
    <ErrorBoundary>
    <div className="display">
      <h2>Welcome to GeoQuery!</h2>

      <InputForm />
      <h3>{props.country ? props.country.name : "Total World Population: 7.6B"}</h3>

      <h4>{props.country ? "Local Name: " : ""}{props.country ? props.country.nativeName : ""}</h4>

      <img src={props.country ? props.country.flag : ""} alt="" />

      <h4>{props.country ? "Capital: " : ""}{props.country ? props.country.capital : ""}</h4>

      <h4>{props.country ? "Region: " : ""}{props.country ? props.country.subregion : ""}</h4>

      <h4>{props.country ? "Nationality: " : ""}{props.country ? props.country.demonym : ""}</h4>

      <h4>{props.country ? "Population: " : ""}{props.country ? props.country.population : ""}</h4>

      <h4>{props.country ? "Area: " : ""}{props.country ? props.country.area + " sq km" : ""}</h4>

      <h4>{props.country ? <button onClick={() => props.addToFavorites(props.country)} className="favButton">Favorite</button> : ""}</h4>



    </div>
    </ErrorBoundary>
  )
}

export default connect(prevState => prevState, { addToFavorites })(Display);