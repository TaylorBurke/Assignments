
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            
         
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>

            <h2>Call us today! 1-800-SHITTER</h2>
        </div>
    )
}

export default Footer;
