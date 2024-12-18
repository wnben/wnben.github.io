/*
import React from 'react';
import './HomeSection2.css';
import homeImage from '../../assets/Home2.JPG';

const HomeSection2 = () => {
    return (
        <div className="home-section">
            <h1 className="home-section__date">Mars 09, 2025</h1>
            <div className="home-section__content">
                
                <div className="home-section__image-container">
                    <img 
                        src={homeImage} 
                        alt="Holding Hands" 
                        className="home-section__image"
                    />
                </div>
                <div className="home-section__details">
                    <p>Westin® Sanya Haitang Bay Resort</p>
                    <p>116 Haitang N Rd, Haitang District, Sanya, Hainan, China</p>
                </div>
            </div>
        </div>
    );
}


export default HomeSection2;
*/

import React from 'react';
import '../css/HomeSection2.css';
import homeImage from '../../assets/Home2.JPG';

const HomeSection2 = () => {
    return (
        <div className="home-section2">
            <h1>March 09, 2025 ♡</h1>
            <div className="image-container2">
                <img 
                    src={homeImage} 
                    alt="Couple sitting on a rooftop" 
                    className="couple-image2"
                />
            </div>
            <p>Westin® Sanya Haitang Bay Resort</p>
            <p>116 Haitang N Rd, Haitang District, Sanya, Hainan, China</p>
        </div>
    );
}

export default HomeSection2;
