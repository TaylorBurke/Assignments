import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = "headie">
            <Link to ="/"> Portfolio </Link>
            <Link to ="/contact"> Contact Me </Link>
        </div>
    )
}

export default Header;