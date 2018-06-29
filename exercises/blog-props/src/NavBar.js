import React from 'react';

function NavBar(props) {
    const {social, email} = props;
    return <div className ="NavBar">  
            <div className ="box"></div>  
            <p>{social}</p>
            <h2>{email}</h2>
           </div>
}

export default NavBar;