import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';


const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact} scrollToProject={props.scrollToProject}/>

            <div className="App-title">


                <h1>Be the confident, playful artist you are.<div className= "big"> Find your creative power.</div>  </h1>
           

            </div>

            <div className="Fade"> </div>
        </div>
    )
}

export default Header;