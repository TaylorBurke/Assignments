import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav" >
            <div>

                <Link to="/"> Home </Link>
                {/* <Link to="/favorites"> Favorites </Link> */}
                <Link to="/information"> Information </Link>
            </div>
           
        </div>




    )
}

export default Nav;