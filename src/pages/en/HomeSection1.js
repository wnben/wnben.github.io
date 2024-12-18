import React from 'react';
import '../css/HomeSection1.css';
import homeImage from '../../assets/Home1.JPG';

const HomeSection1 = () => {
    return (
        <div className="home-section1">
            <h1>Weining ♥ Yuting</h1>
            <div className="image-container">
                <img 
                    src={homeImage} 
                    alt="Couple sitting on a rooftop" 
                    className="couple-image"
                />
            </div>
            <p>- Save the date, we're gettin' hitched -</p>
            <p>We are looking forward to celebrating with you!</p>
        </div>
    );
}

export default HomeSection1;
