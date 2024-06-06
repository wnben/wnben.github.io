// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                <img src="heart-icon.png" alt="Heart Icon" className="heart-icon" />
                <div className="nav-logo">We are wedding!</div>
            </div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/our-story">Our Story</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/the-wedding">The Wedding</Link>
            </div>
            <div className="nav-search" onClick={toggleSearch}>
                <img src="search-icon.png" alt="Search" />
            </div>
            <div className="nav-toggle" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {isSearchOpen && (
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
