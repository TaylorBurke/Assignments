import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';
import magpie from '../pics/magpie.svg';


const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact} scrollToProject={props.scrollToProject}/>

            <div className="App-title">
                <h1>            
                    <img src={magpie} alt="magpie" width="140"/>
                    <br/>
                    Magpie Creative
                </h1>
                <h2>
                    <br/>
                <a href="#">
                    <button className = "Cta">Spin ya up a Site</button>
                </a>
                </h2>

            </div>

            <div className="Fade"> </div>
        </div>
    )
}

export default Header;