import React from 'react';
import './PlayGroup.css';

const PlayGroup = ({ images, columns = 3, gap = '8px', mainPhotoIndices = [] }) => {
  return (
    <div className="play-group">
      <div 
        className="play-group-gallery"
        style={{
          '--columns': columns,
          '--gap': gap
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`play-group-image-container ${
              mainPhotoIndices.includes(index) ? 'main-photo' : ''
            }`}
          >
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="play-group-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayGroup;
