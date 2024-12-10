import React from 'react';
import '../css/WeddingDetails.css';

const eventDetails = [
  {
      theme: 'Welcome Dinner',
      time: 'Friday, June 25, 2023, 6:00 PM',
      location: 'Rooftop Terrace, Hotel XYZ',
      precautions: 'Casual dress code, bring a light jacket.'
  },
  {
      theme: 'Bridal Shower',
      time: 'Saturday, June 26, 2023, 10:00 AM',
      location: 'Main Hall, Hotel XYZ',
      precautions: 'Formal attire, gifts optional.'
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
      theme: 'After Party',
      time: 'Saturday, June 26, 2023, 9:00 PM',
      location: 'Club Lounge, Hotel XYZ',
      precautions: 'Casual attire, open bar.'
  },
  {
      theme: 'Morning Yoga',
      time: 'Sunday, June 27, 2023, 8:00 AM',
      location: 'Hotel XYZ Lawn',
      precautions: 'Wear comfortable attire, yoga mats provided.'
  },
  {
      theme: 'Farewell Brunch',
      time: 'Sunday, June 27, 2023, 10:00 AM',
      location: 'Main Dining Room, Hotel XYZ',
      precautions: 'Casual attire, relaxed atmosphere.'
  },
  {
      theme: 'Departure',
      time: 'Sunday, June 27, 2023, 12:00 PM',
      location: 'Hotel Lobby',
      precautions: 'Check out by 11:00 AM.'
  }
];

const WeddingDetails = () => {
  return (
      <div className="home-section-4">
          <div className="container">
              <h2 className="section-title">- Event Details -</h2>
              <div className="events-container">
                  {eventDetails.map((event, index) => (
                      <div className="event-card" key={index}>
                          <h3 className="event-theme">{event.theme}</h3>
                          <p className="event-time"><strong>Time:</strong> {event.time}</p>
                          <p className="event-location"><strong>Location:</strong> {event.location}</p>
                          <p className="event-precautions"><strong>Precautions:</strong> {event.precautions}</p>
                      </div>
                  ))}
              </div>
          </div>
          
      </div>
  );
};


export default WeddingDetails;
