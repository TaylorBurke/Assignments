import React from 'react';

function Footer(props) {
    const {social, email} = props;
    return <div className ="Footer">    
        <p>{social}</p>
        <h2>{email}</h2>
    </div>
}

export default Footer;