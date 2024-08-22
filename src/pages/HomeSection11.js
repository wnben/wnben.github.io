import React from 'react';
import CalendarIcon from '../assets/calendar-icon.svg';
import LocationIcon from '../assets/location-icon.svg';
import './HomeSection11.css';

const HomeSection1 = () => {
    return (
        <div className="home-section-1">
            <div className="home-section-1-frame">
                <div className="home-section-1-content">
                    <h1>Weining & Yuting are getting married</h1>
                    <div className="home-section-1-details-container">
                        <div className="home-section-1-detail">
                            <img src={CalendarIcon} alt="Calendar Icon" className="home-section-1-icon" />
                            <p>Saturday, June 26, 2023, at 4:00 PM</p>
                        </div>
                        <div className="home-section-1-detail">
                            <img src={LocationIcon} alt="Location Icon" className="home-section-1-icon" />
                            <p>Central Park, New York, NY</p>
                        </div>
                    </div>
                    <button className="rsvp-button">RSVP</button>
                </div>
            </div>
        </div>
    );
};

export default HomeSection1;