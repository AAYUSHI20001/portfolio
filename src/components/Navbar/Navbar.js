import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div classname="navbar-left">
    <span className="navbar-item">PORTFOLIO</span>
    </div>
    <div className="navbar-right"></div>
      <ul classname="navbar-menu">
        <li><Link to="/" id="home-link">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/contact" className="contact-link">CONTACT</Link></li>
      </ul>
     
    </nav>
  );
}

export default Navbar;
