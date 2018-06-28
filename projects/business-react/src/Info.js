import React from "react";

function Info(props){
    const {name, tagline, marketCap, ventureFund} = props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Tagline: {tagline}</h2>
        <h1>Market Cap: {marketCap}</h1>
        <h2>Venture Fund: {ventureFund}</h2>
      </div>
    )
  }

export default Info;