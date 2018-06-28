import React from "react";

function Footer(props) {
    const { address, email } = props;
    return (
        <div>
            <footer>
                <h3>Address: {address}</h3>
                <h2>Email: {email}</h2>
            </footer>
        </div>
    )
}

export default Footer;