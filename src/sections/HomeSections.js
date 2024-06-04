// src/sections/HomeSection.js
import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
    return (
        <div className="home-section">
            <div className="background-image">
                <div className="text-content">
                    <h1>Join us for the wedding</h1>
                    <p>Saturday, March 9, 2025, at 4:00 PM</p>
                    <div className="buttons">
                        <button>Open</button>
                        <button>Add to Calendar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
