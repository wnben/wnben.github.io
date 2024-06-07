// src/utils/loadImages.js

export const loadImages = (r) => r.keys().map((item, index) => ({
    original: r(item).default,
    thumbnail: r(item).default,
    originalAlt: `Image ${index + 1}`,
    thumbnailAlt: `Thumbnail ${index + 1}`,
  }));
  