import React, { useState } from 'react';
import { importAll } from '../utils/imageLoader';
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
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="content-container">
      <div className="gallery-container">
        {Object.entries(albums).map(([albumName, images]) => (
          <div key={albumName} className="album-row">
            <h2>{albumName.charAt(0).toUpperCase() + albumName.slice(1)}</h2>
            <div className="image-scroll-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;