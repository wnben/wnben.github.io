import React from 'react';
import { importAll } from '../utils/imageLoader'; // Import the utility function
import './Gallery.css';

// Dynamically import all images from the subfolders
const outsideImages = importAll(require.context('../assets/gallery/FB_outside', false, /\.(jpg|jpeg|png|JPG)$/));
const passageImages = importAll(require.context('../assets/gallery/FB_passage', false, /\.(jpg|jpeg|png|JPG)$/));
const stairwayImages = importAll(require.context('../assets/gallery/FB_stairway', false, /\.(jpg|jpeg|png|JPG)$/));

const images = [
    ...outsideImages.map((src, index) => ({ src, alt: `outside ${index + 1}` })),
    ...passageImages.map((src, index) => ({ src, alt: `passage ${index + 1}` })),
    ...stairwayImages.map((src, index) => ({ src, alt: `stairway ${index + 1}` }))
];
console.log(images);

const Gallery = () => {
    return (
        <div className="gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;