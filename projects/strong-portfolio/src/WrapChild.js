import React, { Component } from 'react';


const WrapChild =(props) =>{
        return (
            <div className="WrapChild">
                <h1>{props.name}</h1>
                <h2>{props.date.toLocaleTimeString()}</h2>
                <img src="https://orig00.deviantart.net/965e/f/2011/093/6/6/biggestnarutard__s_icon_by_the_fry_bat-d3d3f5e.gif" alt="" width="auto" />
            </div>
        )
    }

export default WrapChild;