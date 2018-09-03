import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';


const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact}/>

            <div className="App-title">


                <h1>Hi! I'm Taylor Burke.
            I make sublime websites.</h1>

            </div>

            <div className="Fade"> </div>
        </div>
    )
}

export default Header;