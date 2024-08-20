import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg'; // Correct import
import WeddingLogo from '../assets/wedding-logo.png';
import SearchComponent from './SearchComponent';
import './Navbar.css';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={WeddingLogo} alt="Wedding Logo" className="navbar-logo" />
        <span className="navbar-brand">Yes, I do</span>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/our-story">Our Story</Link>
        </li>
        <li className="navbar-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/wedding-details">Wedding Details</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <SearchIcon className="navbar-search-icon" onClick={() => setShowSearch(!showSearch)} />
        {showSearch && <SearchComponent />}
      </div>
    </nav>
  );
};

export default Navbar;
