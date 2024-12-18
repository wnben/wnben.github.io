import React from 'react';
import '../css/OurStory.css'; // Import the CSS file

// Dynamically import all images from the ../assets/Story directory
const importAll = (requireContext) => requireContext.keys().map(requireContext);
let images = importAll(require.context('../../assets/Story', false, /\.(png|jpe?g|svg)$/));

// Sort images by the date in their filenames
images.sort((a, b) => {
  const dateA = new Date(a.split('/').pop().split('.')[0]);
  const dateB = new Date(b.split('/').pop().split('.')[0]);
  return dateA - dateB;
});

// Custom text for each image
const customTexts = [
  '2021-08-14 Watching Messi\'s first game in PSG',
  '2021-08-14 Milano',
  '2022-01-28 Snowboarding in Chamonix',
  '2022-03-20 Enjoying classical music in Opéra',
  '2022-04-16 we got a puppy and her name is ouais ouais!',
  '2022-05-15 The most romantic confession balloon under Eiffel Tower',
  '2022-08-23 Wandering on the Promenade de England in Nice',
  '2022-08-26 First flying in Nice',
  '2023-01-16 Back to China together',
  '2023-01-28 Layover in Helsinki',
  '2023-05-15 Vacationing in Malta',
  '2023-12-7 Concert of Mayday',
  '2023-12-19 Chasing northern lights in Tromoso',
  '2024-01-04 Got lost again in the red lane',
  '2024-02-27 Went through a surgery:(',
  '2024-04-23 Vacationing in Sanya',
  '2024-07-29 Cheering for China in Paris Olympics',
  '2024-11-01 Windmill village in Netherland',
  'placeholder',
  // Add more custom text for each image
];

// Combine images and custom text into storyData
const storyData = images.map((img, index) => ({
  img,
  text: customTexts[index] || `This is part ${index + 1} of our story...`
}));

const OurStory = () => {
  return (
    <div className='content-container'>
      <div className='ourstory-page'>
        <div className='story-grid'>
          {storyData.map((item, index) => (
            <div key={index} className='story-item'>
              <img src={item.img} alt={`Story ${index + 1}`} className='story-image' />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;