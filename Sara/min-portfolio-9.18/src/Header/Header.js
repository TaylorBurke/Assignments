import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';
import lotus from '../pics/lotus.png';
import arrow from '../pics/down-arrow.png'


const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact} scrollToProject={props.scrollToProject}/>

            <div className="App-title">


                <h1><div className= "big"><img src={lotus} alt="lotus"/><br/>Unlock Your Potential</div></h1>
           

            </div>
            <div className="Footer-contacts"><a href="#"><img src={arrow} alt="arrow" width="60px"/></a></div>

            <div className="Fade"> </div>
        </div>
    )
}

export default Header;