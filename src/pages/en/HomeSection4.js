import React from 'react';
import '../css/HomeSection4.css';
import RSVPForm from './RSVPForm'; // Ensure the correct path to RSVPForm.js

const HomeSection4 = () => {
    return (
        <div className="home-section-4">
            <div className="container">
                <h2 className="section-title">- RSVP -</h2>
                <RSVPForm />  {/* Replacing the event details with the form */}
            </div>
        </div>
    );
};

export default HomeSection4;