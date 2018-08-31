import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class Headline extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="top" className="menu-item" href="/">Intro</a>
        <a id="projects" className="menu-item" href="/about">My Work</a>
        <a id="contact" className="menu-item" href="/contact">Contact Me</a>
      </Menu>
    );
  }
}

export default Headline;