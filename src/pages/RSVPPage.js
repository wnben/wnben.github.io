import React from 'react';
import RSVPForm from '../components/RSVPForm';
import './RSVPPage.css';

const RSVPPage = () => {
    return (
        <div className="rsvp-page">
            <section className="rsvp-section-1">
                <RSVPForm />
            </section>
            <section className="rsvp-section-2">
                {/* Section2 content will go here */}
            </section>
        </div>
    );
};

export default RSVPPage;
