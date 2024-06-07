// src/pages/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        <li>
          <Link to="/gallery/FB_outside">FB Outside</Link>
        </li>
        <li>
          <Link to="/gallery/FB_passage">FB Passage</Link>
        </li>
        <li>
          <Link to="/gallery/FB_stairway">FB Stairway</Link>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
