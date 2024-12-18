import React from 'react';
import '../css/WeddingDetails.css';

const eventDetails = [
  {
      theme: 'Check-in',
      time: 'Saturday, March 8, 2025, starting from 14:00 ',
      location: 'Reception Desk, The Westin Sanya Haitang Bay Resort',
      precautions: 'Please let us know in advance if you need an early check-in or if you need to take the shuttle bus from the airport. Besides, we book the twins room by default, so please let us know if you need a king room. '
  },  
  {
      theme: 'Come to say Hi',
      time: 'Saturday, March 8, 2025, 16:00 - 22:00',
      location: 'Exotic Villas, The Westin Sanya Haitang Bay Resort (The exact villa number will be provided later)',
      precautions: 'We are looking forward to seeing you and chatting with you before the wedding, so please come by and say hi if you don\'t have any other plans on Saturday.'
  },
  {
    theme: 'Buffet Breakfast',
    time: 'Sunday, March 9/10, 2025, 07:00 - 11:00',
    location: 'Seasonal Tastes Restaurant, The Westin Sanya Haitang Bay Resort (A map of the hotel will be provided)',
    precautions: 'We book the buffet breakfast for both 9th and 10th March for you. If you wake up on time, don\'t miss it :) there are plenty of choices delicious food. BTW, the beverage in the mini bar in your room is also for free, so enjoy it!'
  },
  {
      theme: 'Wedding Ceremony',
      time: 'Sunday, March 9, 2025, 16:00 - 18:00',
      location: 'WeiFeng Garden, The Westin Sanya Haitang Bay Resort (A map of the hotel will be provided)',
      precautions: 'Formal attire, LIGHT COLORED CLOTHING please!'
  },
  {
      theme: 'Dinner',
      time: 'Sunday, March 9, 2025, 19:00 - 22:00',
      location: 'TianMeng Garden, Westin Hotel (A map of the hotel will be provided)',
      precautions: 'Dinner and dancing, formal attire if you have one, any color is fine.'
  },
  {
      theme: 'After Party',
      time: 'Sunday, March 9, 2025, 22:00 - 02:00',
      location: 'Exotic Villas, The Westin Sanya Haitang Bay Resort (The exact villa number will be provided later)',
      precautions: 'We will continue to celebrate after dinner in the villas, so join us if you are not yet tired!'
  },
  {
      theme: 'Check-out',
      time: 'Monday, March 10, 2025, 12:00',
      location: 'Reception Desk, The Westin Sanya Haitang Bay Resort',
      precautions: 'Please let us know in advance if you need a late check-out or if you need to take the shuttle bus to the airport. '
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
