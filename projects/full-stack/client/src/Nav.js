import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
            <div className="navBar">
                <Link to="/"> New Transaction </Link>
                <Link to="/balance"> Account Balance </Link>
                </div>

    )
}


export default Nav;
