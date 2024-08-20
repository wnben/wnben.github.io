import React from 'react';
import './HomeSection2.css';

const itineraryData = [
    {
        theme: 'Welcome Dinner',
        time: 'Friday, June 25, 2023, 6:00 PM',
        location: 'Rooftop Terrace, Hotel XYZ',
        precautions: 'Casual dress code, bring a light jacket.'
    },
    {
        theme: 'Wedding Ceremony',
        time: 'Saturday, June 26, 2023, 4:00 PM',
        location: 'Central Park, New York, NY',
        precautions: 'Formal attire, arrive 30 minutes early.'
    },
    {
        theme: 'Reception',
        time: 'Saturday, June 26, 2023, 6:00 PM',
        location: 'Grand Ballroom, Hotel XYZ',
        precautions: 'Dinner and dancing, formal attire.'
    },
    {
        theme: 'Farewell Brunch',
        time: 'Sunday, June 27, 2023, 10:00 AM',
        location: 'Hotel XYZ, Main Dining Room',
        precautions: 'Casual attire, relaxed atmosphere.'
    }
];

const HomeSection2 = () => {
    return (
        <div className="home-section-2">
            <h2>Itinerary</h2>
            <div className="itinerary-table">
                <div className="itinerary-row itinerary-header">
                    <div className="itinerary-cell">Theme</div>
                    <div className="itinerary-cell">Time</div>
                    <div className="itinerary-cell">Location</div>
                    <div className="itinerary-cell">Precautions</div>
                </div>
                {itineraryData.map((item, index) => (
                    <div className="itinerary-row" key={index}>
                        <div className="itinerary-cell">{item.theme}</div>
                        <div className="itinerary-cell">{item.time}</div>
                        <div className="itinerary-cell">{item.location}</div>
                        <div className="itinerary-cell">{item.precautions}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSection2;