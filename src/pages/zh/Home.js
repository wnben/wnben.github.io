import React from 'react';
import Navbar from '../../components/Navbar';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import HomeSection4 from './HomeSection4';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
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