import React, { useState } from 'react';
import { importAll } from '../../utils/imageLoader';
import '../css/Gallery.css';

// Dynamically import all images from the subfolders
const FontainebleauImages = importAll(require.context('../../assets/gallery/FB_Fontainebleau', false, /\.(jpg|jpeg|png|JPG)$/));
const Fontainebleau2Images = importAll(require.context('../../assets/gallery/FB_Fontainebleau2', false, /\.(jpg|jpeg|png|JPG)$/));
const TourEiffelImages = importAll(require.context('../../assets/gallery/FB_TourEiffel', false, /\.(jpg|jpeg|png|JPG)$/));
const FranceImages = importAll(require.context('../../assets/gallery/FB_France', false, /\.(jpg|jpeg|png|JPG)$/));
const LouvreImages = importAll(require.context('../../assets/gallery/FB_Louvre', false, /\.(jpg|jpeg|png|JPG)$/));

const albums = {
  'Palace of Fontainebleau': FontainebleauImages.map((src, index) => ({ src, alt: `Fontainebleau ${index + 1}` })),
  'Palace of Fontainebleau ': Fontainebleau2Images.map((src, index) => ({ src, alt: `Fontainebleau2 ${index + 1}` })),
  'Tour Eiffel': TourEiffelImages.map((src, index) => ({ src, alt: `TourEiffel ${index + 1}` })),
  'Institute of France': FranceImages.map((src, index) => ({ src, alt: `France ${index + 1}` })),
  'Louvre Museum': LouvreImages.map((src, index) => ({ src, alt: `Louvre ${index + 1}` }))
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