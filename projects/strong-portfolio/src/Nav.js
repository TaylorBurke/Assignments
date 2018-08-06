import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className = "Nav" >
            <Link to ="/" > Home </Link>
            <Link to ="faq" > FAQ </Link>
        </div>
    )
}

export default Nav;