import React, { Component } from 'react';
import './Headline.css';
import fb from '../pics/fb.png';


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
            <div className="Headline">
                <div className='menu'>

                    <a onClick={this.props.scrollToContact} className="menuItem">Our Story</a>

                    <a onClick=
                    {this.props.scrollToProject} className="menuItem">Catering</a>

                    <a onClick ={this.props.scrollToContact} className="menuItem">Find Us
                    </a>

                    <a onClick={this.props.scrollToContact} className="menuItem">Contact Us</a>

                    <a href="https://www.facebook.com/LaCubanaslc/" target="blank" className="menuItem"><img src={fb} alt="fb" width ="30px"/></a>
                    </div>
            </div>
        );
    }
}

export default Headline;