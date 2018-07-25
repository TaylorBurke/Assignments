import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import DogWalking from './DogWalking'
import DayCare from './DayCare'
import LawnCare from './LawnCare'

const Services = () => {
    return (
        <div className="servicesContainer">
            <div>
                <h1>Services</h1>
                <Link to="/services/1">Dog Walking</Link>
                <Link to="/services/2">Lawn Care</Link>
                <Link to="/services/3">Day Care</Link>
            </div>
            <div>
                <Route path="/services/1" component={ DogWalking }/>
                <Route path="/services/2" component={ DayCare }/>
                <Route path="/services/3" component={ LawnCare }/>
            </div>
        </div>
    )
}

export default Services;