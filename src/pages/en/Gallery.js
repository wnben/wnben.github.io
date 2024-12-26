import React, { useState, useEffect } from 'react';
import { importAll } from '../../utils/imageLoader';
import '../css/Gallery.css';

// Dynamically import all images from the subfolders
const FontainebleauImages = importAll(require.context('../../assets/gallery/FB_Fontainebleau', false, /\.(jpg|jpeg|png|JPG)$/));
const Fontainebleau2Images = importAll(require.context('../../assets/gallery/FB_Fontainebleau2', false, /\.(jpg|jpeg|png|JPG)$/));
const TourEiffelImages = importAll(require.context('../../assets/gallery/FB_TourEiffel', false, /\.(jpg|jpeg|png|JPG)$/));
const FranceImages = importAll(require.context('../../assets/gallery/FB_France', false, /\.(jpg|jpeg|png|JPG)$/));
const LouvreImages = importAll(require.context('../../assets/gallery/FB_Louvre', false, /\.(jpg|jpeg|png|JPG)$/));

// Assuming you have a similar structure for thumbnails
const FontainebleauThumbnails = importAll(require.context('../../assets/gallery/FB_Fontainebleau_thumbnails', false, /\.(jpg|jpeg|png|JPG|webp)$/));
const Fontainebleau2Thumbnails = importAll(require.context('../../assets/gallery/FB_Fontainebleau2_thumbnails', false, /\.(jpg|jpeg|png|JPG|webp)$/));
const TourEiffelThumbnails = importAll(require.context('../../assets/gallery/FB_TourEiffel_thumbnails', false, /\.(jpg|jpeg|png|JPG|webp)$/));
const FranceThumbnails = importAll(require.context('../../assets/gallery/FB_France_thumbnails', false, /\.(jpg|jpeg|png|JPG|webp)$/));
const LouvreThumbnails = importAll(require.context('../../assets/gallery/FB_Louvre_thumbnails', false, /\.(jpg|jpeg|png|JPG|webp)$/));

const albums = {
  'Fontainebleau': FontainebleauImages.map((src, index) => ({
    src,
    thumbnail: FontainebleauThumbnails[index],
    alt: `Fontainebleau ${index + 1}`
  })),
  'Fontainebleau2': Fontainebleau2Images.map((src, index) => ({
    src,
    thumbnail: Fontainebleau2Thumbnails[index],
    alt: `Fontainebleau2 ${index + 1}`
  })),
  'Tour Eiffel': TourEiffelImages.map((src, index) => ({
    src,
    thumbnail: TourEiffelThumbnails[index],
    alt: `Tour Eiffel ${index + 1}`
  })),
  'France': FranceImages.map((src, index) => ({
    src,
    thumbnail: FranceThumbnails[index],
    alt: `France ${index + 1}`
  })),
  'Louvre': LouvreImages.map((src, index) => ({
    src,
    thumbnail: LouvreThumbnails[index],
    alt: `Louvre ${index + 1}`
  }))
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentAlbum, setCurrentAlbum] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, album, index) => {
    setSelectedImage({ ...image, src: image.src });
    setCurrentAlbum(album);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event) => {
    if (!selectedImage) return;

    if (event.key === 'ArrowRight') {
      goToNextImage();
    } else if (event.key === 'ArrowLeft') {
      goToPreviousImage();
    }
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % currentAlbum.length;
    setSelectedImage(currentAlbum[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    setSelectedImage(currentAlbum[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex, currentAlbum]);

  return (
    <div className="content-container">
      <div className="gallery-container">
        {Object.entries(albums).map(([albumName, images]) => (
          <div key={albumName} className="album-row">
            <h2>{albumName.charAt(0).toUpperCase() + albumName.slice(1)}</h2>
            <div className="image-scroll-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnail}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => openModal(image, images, index)}
                  style={{ display: 'inline-block', marginRight: '10px' }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ overflowY: 'auto', maxHeight: '90vh', position: 'relative' }}>
            <span className="close" onClick={closeModal}>&times;</span>
            <button className="prev-button" onClick={goToPreviousImage}>&#10094;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" style={{ maxHeight: '100%' }} />
            <button className="next-button" onClick={goToNextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;