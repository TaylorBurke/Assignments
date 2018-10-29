import React, { Component } from 'react';
import menu from '../pics/ham-menu.png';
import x from '../pics/cancel.png'
import './Headline.css';


class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }
    toggle(event) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className="Headline sticky">
                <div className="menuButton" onClick={this.toggle}>
                    <img src={`${isOpen ? x : menu} `} alt="menu" />
                </div>
                <div className={`menu ${isOpen ? 'show' : 'hide'} sticky`}>
                    <a onClick={this.props.scrollToProject} className="menuItem">Episodes</a>

                    <a onClick={this.props.scrollToContact} className="menuItem">Contact</a>

                </div>
            </div>
        );
    }
}

export default Headline;