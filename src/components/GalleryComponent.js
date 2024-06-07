// src/components/GalleryComponent.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { loadImages } from '../utils/loadImages';

const galleries = {
  FB_outside: loadImages(require.context('../assets/gallery-images/FB_outside', false, /\.(jpg)$/)),
  FB_passage: loadImages(require.context('../assets/gallery-images/FB_passage', false, /\.(jpg)$/)),
  FB_stairway: loadImages(require.context('../assets/gallery-images/FB_stairway', false, /\.(jpg)$/)),
};

const GalleryComponent = () => {
  const { galleryName } = useParams();
  const photos = galleries[galleryName] || [];

  return (
    <div>
      <h2>{galleryName.replace('_', ' ')}</h2>
      <ImageGallery items={photos} />
    </div>
  );
};

export default GalleryComponent;
