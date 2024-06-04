// src/components/Navbar.js
import React, { useState } from 'react';
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
                <a href="#home">Home</a>
                <a href="#our-story">Our story</a>
                <a href="#gallery">Gallery</a>
                <a href="#the-wedding">The wedding</a>
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
