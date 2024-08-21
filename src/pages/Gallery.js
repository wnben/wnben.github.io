import React, { useState } from 'react';
import { importAll } from '../utils/imageLoader'; // Import the utility function
import './Gallery.css';

// Dynamically import all images from the subfolders
const outsideImages = importAll(require.context('../assets/gallery/FB_outside', false, /\.(jpg|jpeg|png|JPG)$/));
const passageImages = importAll(require.context('../assets/gallery/FB_passage', false, /\.(jpg|jpeg|png|JPG)$/));
const stairwayImages = importAll(require.context('../assets/gallery/FB_stairway', false, /\.(jpg|jpeg|png|JPG)$/));

const albums = {
  outside: outsideImages.map((src, index) => ({ src, alt: `outside ${index + 1}` })),
  passage: passageImages.map((src, index) => ({ src, alt: `passage ${index + 1}` })),
  stairway: stairwayImages.map((src, index) => ({ src, alt: `stairway ${index + 1}` }))
};

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState('outside');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAlbumChange = (album) => {
    setSelectedAlbum(album);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? albums[selectedAlbum].length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === albums[selectedAlbum].length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="album-selector">
        {Object.keys(albums).map((album) => (
          <button
            key={album}
            className={`album-button ${selectedAlbum === album ? 'active' : ''}`}
            onClick={() => handleAlbumChange(album)}
          >
            {album.charAt(0).toUpperCase() + album.slice(1)}
          </button>
        ))}
      </div>
      <div className="carousel">
        <button className="nav-button prev" onClick={handlePrev}>‹</button>
        <img
          src={albums[selectedAlbum][currentIndex].src}
          alt={albums[selectedAlbum][currentIndex].alt}
          className="carousel-image"
        />
        <button className="nav-button next" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Gallery;