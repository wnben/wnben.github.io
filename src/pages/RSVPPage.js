import React from 'react';
import RSVPForm from '../components/RSVPForm';
import './RSVPPage.css';
import RSVPSection2 from './RSVPSection2';

const RSVPPage = () => {
    return (
        <div className="rsvp-page">
            <section className="rsvp-section-1">
                <RSVPForm />
            </section>
            <section className="rsvp-section-2">
                <RSVPSection2 />
            </section>
        </div>
    );
};

export default RSVPPage;
