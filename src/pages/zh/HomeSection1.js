import React from 'react';
import '../css/HomeSection1.css';
import homeImage from '../../assets/Home1.JPG';

const HomeSection1 = () => {
    return (
        <div className="home-section1">
            <h1>贲威宁 ♥ 黄语亭</h1>
            <div className="image-container">
                <img 
                    src={homeImage} 
                    alt="Couple sitting on a rooftop" 
                    className="couple-image"
                />
            </div>
            <p>- 记下这个日期吧 我们要结婚啦 -</p>
            <p>非常期待与大家一起庆祝！</p>
        </div>
    );
}

export default HomeSection1;
