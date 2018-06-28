import React from 'react';

function Footer(props) {
    const {social, email} = props;
    return <div className ="Footer">
        <h1>
            Social: {social}
            Email: {email}
        </h1>
    </div>
}

export default Footer;