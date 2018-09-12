import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';


const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact} scrollToProject={props.scrollToProject}/>

            <div className="App-title">


                <h1>La Cubana</h1>
                <h2>Bringing a little MIA to SLC</h2>

            </div>

            <div className="Fade"> </div>
        </div>
    )
}

export default Header;