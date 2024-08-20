import React from 'react';
import HomeSection1 from './HomeSection1'; // Assuming you have this section
import HomeSection2 from './HomeSection2'; // Importing HomeSection2
import './Home.css'; // Assuming you have some global styles for Home

const Home = () => {
    return (
        <div className="home-page">
            <HomeSection1 />
            <HomeSection2 /> {/* Adding HomeSection2 */}
            {/* You can add more sections here */}
        </div>
    );
};

export default Home;