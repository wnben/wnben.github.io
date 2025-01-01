import React from 'react';
import '../css/WeddingDetails.css';

const eventDetails = [
  {
      theme: 'Check-in',
      time: 'Saturday, March 8, 2025, starting from 15:00 ',
      location: 'Reception Desk, The Westin Sanya Haitang Bay Resort',
      precautions: 'Please let us know in advance if you need an early check-in or if you need to take the shuttle bus from the airport. Besides, we book the sea-view twins room by default for you, so please let us know if you need a sea-view king room. '
  },  
  {
      theme: 'Come to say Hi',
      time: 'Saturday, March 8, 2025, 16:00 - 22:00',
      location: 'Exotic Villas (#14 on the map, which is at the bottom of this page), The Westin Sanya Haitang Bay Resort (The exact villa number will be provided later)',
      precautions: 'We are looking forward to seeing you and chatting with you before the wedding, so please come by and say hi if you don\'t have any other plans on Saturday.'
  },
  {
    theme: 'Buffet Breakfast',
    time: 'Sunday, March 9/10, 2025, 07:00 - 11:00',
    location: 'Seasonal Tastes Restaurant (#4 on the map), The Westin Sanya Haitang Bay Resort',
    precautions: 'We book the buffet breakfast for both 9th and 10th March for you. If you wake up on time, don\'t miss it :) There are plenty of choices delicious food. BTW, the beverage in the mini bar in your room is also for free, so enjoy it!'
  },
  {
    theme: 'Free time',
    time: 'Sunday, March 9, 2025, 11:00 - 16:00',
    location: 'You can choose freely, but remember not to miss the wedding ceremony at 16:00',
    precautions: (
      <>
        <p><strong>Recommended activities:</strong></p>
        <ul>
          <li><strong>Swimming pool(#14,#15,#16,#18 on the map):</strong>The hotel has a 10,000-square-meter swimming pool, including a 400-meter-long coconut grove river pool. At the same time, we have prepared a six-piece set of swimming pool fun for everyone: free rental of the hotel's paddleboards/kayaks/canoes/surfboards/transparent sightseeing boats/Internet celebrity swimming rings (limited to 1 hour per day).</li>
          <li><strong>Travel photography (reservation required 1 day in advance):</strong>The hotel offers free travel photography, where you can take photos in the hotel's coconut grove, swimming pool or beach. Please note that only 5 photos are free at the end of the selection, and additional fees will be required for more than that.</li>
          <li><strong>Rooftop infinity pool (#11 on the map):</strong>You can swim and take pictures, it's very nice, you can refer to the photos in our story. But please note that there is a minimum consumption (actually you can just buy a coconut).</li>
          <li><strong>Duty Free Shopping (#13 on the map):</strong>Next to the hotel is CDF Sanya International Duty Free City, which can be reached directly through the hotel's exclusive pedestrian passage (#12 on the map) and enjoy a 5%-15% discount. For details, please consult the hotel.</li>
          <li><strong>Surfing/Wakeboarding:</strong>You need to go to Houhai or Fenghuang Island, contact us for more details if you are interested.</li>
          <li><strong>Other attractions in Sanya:</strong>Tianya Haijiao, Coconut Dream Corridor, Tropical Forest Park, Luhuitou, Wuzhizhou Island, West Island...</li>
        </ul>
        <p><strong>Recommended dining:</strong></p>
        <ul>
          <li><strong>Haitang Global 68 Food Court:</strong>The food street closest to the hotel, recommended are Ye Xiao Ji (coconut chicken hotpot, not spicy), Qiongzhou dregs vinegar (Hainan century-old traditional hot pot), Hongsha food stall (seafood), Lizhu (Hainan cuisine)..</li>
          <li><strong>In-hotel restaurants:</strong>Shuiting Beach Restaurant (seafood buffet restaurant) (#24 on the map), Five Sen5es (Chinese elements restaurant) (#2 on the map), Mai Restaurant (Japanese restaurant) (#6 on the map), Shilou (restaurant + bar) (#10 on the map)...</li>
          <li><strong>Night market:</strong>Linwang Night Market, Yiheng Night Market, Houhai Night Market...</li>
          <li><strong>Takeout:</strong>If you don't want to go out, you can also order takeout.</li>
        </ul>
      </>
    )
  },
  {
      theme: 'Wedding Ceremony -- The Most Important Part!!!',
      time: 'Sunday, March 9, 2025, 16:00 - 18:00',
      location: 'Breeze Lawn (Map #23), Sanya Haitang Bay Minsheng Westin Resort',
      precautions: (
        <>
          <p><strong>Dress Code:</strong> Formal. For the overall effect of the ceremony, <strong><span style={{ color: '#b01e1f' }}>please make sure to wear light-colored clothes!</span></strong></p>
          <ul>
            <li>If not sure, please compare the below color card to choose. This is super important for our photoshoot 🥺. Thanksssssss</li>
          </ul>
          <img src={require('../../assets/dresscode.jpg')} alt="Dress Code" className="dresscode-image" />
        </>
      )
  },
  {
      theme: 'Dinner',
      time: 'Sunday, March 9, 2025, 19:00 - 22:00',
      location: 'TianMeng Garden (#23 on the map), The Westin Sanya Haitang Bay Resort',
      precautions: 'Dinner and dancing, formal attire if you have one, any color is fine.'
  },
  {
      theme: 'After Party',
      time: 'Sunday, March 9, 2025, 22:00 - 02:00',
      location: 'Exotic Villas (#4 on the map), The Westin Sanya Haitang Bay Resort',
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
              <div className="image-container">
                  <img src={require('../../assets/map.jpg')} alt="Wedding" className="wedding-image" />
              </div>
          </div>
      </div>
  );
};


export default WeddingDetails;
