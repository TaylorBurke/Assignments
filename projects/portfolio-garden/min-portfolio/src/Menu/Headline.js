import React, { Component } from 'react';
import menu from '../pics/ham-menu.png';
import './Headline.css';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }

        this.toggle = this.toggle.bind(this);
    }
    toggle(event) {
        
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }


    render() {
        const { isOpen } = this.state;

        <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/contact" component={Footer} />
          </Switch>

        return (
            <div className = "Headline">
                <div className ="menuButton" onClick={this.toggle}>

                    <img src={menu} alt="menu"/>
                </div>
                <div className ={isOpen ? 'show' : 'hide' }>
                    
                    <Link to="/" className="menuItem">Home</Link>
                    <Link to="contact" className="menuItem">Contact Me</Link>
                    
                </div>
            </div>
        );
    }
}

export default Headline;