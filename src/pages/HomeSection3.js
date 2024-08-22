import React from 'react';
import './HomeSection3.css';
import homeImage from '../assets/Home3.JPG';

const HomeSection3 = () => {
  return (
    <section className="home-section-3">
      <div className="container">
        <h2 className="section-title">- Our Story -</h2> {/* Add a class for the title */}
        <div className="story-content">
          <div className="image-container">
            <img src={homeImage} alt="Couple" className="story-image" />
            <p className="image-caption">- Loving the journey -</p>
          </div>
          <div className="text-container">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's easy. 
              Just click “Edit Text” or double click me to add your own content and make changes to the font. 
              Feel free to drag and drop me anywhere you like on your page. 
              I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
            <p>
              At Wix we’re passionate about making templates that allow you to build fabulous websites 
              and it’s all thanks to the support and feedback from users like you! 
              Keep up to date with New Releases and what’s Coming Soon in Wix ellaneous in Support. 
              Feel free to tell us what you think and give us feedback in the Wix Forum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
