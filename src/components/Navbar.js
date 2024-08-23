import React from 'react';
import { Link } from 'react-router-dom';
// import WeddingLogo from '../assets/wedding-logo.png';
// import SearchComponent from './SearchComponent';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-vertical">
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/our-story">Our Story</Link>
        </li>
        <li className="navbar-item">
          <Link to="/wedding-details">Details</Link>
        </li>
        <li className="navbar-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/RSVPPage">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;