import React from 'react'
import { Link } from 'react-router-dom'
import Favorites from './Favorites'

const Nav = () => {
    return (
        <div className="nav" >
            <div>
                <Link to="/"> Home </Link>
                <Link to="/favorites"> Favorites </Link>
            </div>
            {/* <div>
                <Route path="/" component={Display} />
                <Route path="/" component={Favorites} />
            </div> */}
        </div>




    )
}

export default Nav;