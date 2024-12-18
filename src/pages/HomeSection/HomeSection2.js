import React from 'react';
import './HomeSection2.css';
import homeImage from '../../assets/Home2.JPG';

const HomeSection2 = () => {
    return (
        <div className="home-section">
            <div className="home-section__content">
                <h1 className="home-section__date">Mars 09, 2025</h1>
                <div className="home-section__image-container">
                    <img 
                        src={homeImage} 
                        alt="Holding Hands" 
                        className="home-section__image"
                    />
                </div>
                <div className="home-section__details">
                    <p>March 09, 2025, 2:00 PM – 11:00 PM</p>
                    <p>Westin® Hotels & Resorts - Sanya Haitang Bay Resort</p>
                    <p>116 Haitang N Rd, Haitangwanzhen, Haitang District, Sanya, Hainan, China</p>
                </div>
            </div>
        </div>
    );
}

export default HomeSection2;