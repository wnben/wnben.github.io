import React from 'react';
import HomeSection1 from './HomeSection/HomeSection1';
import HomeSection2 from './HomeSection/HomeSection2';
import HomeSection3 from './HomeSection/HomeSection3';
import HomeSection4 from './HomeSection/HomeSection4';
import './Home.css';
// import HomeSection11 from './HomeSection11';

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-sections-row">
                <HomeSection1 />
                <HomeSection2 />
            </div>
            {/* <HomeSection3 /> */}
            <HomeSection4 />
        </div>
    );
};

export default Home;