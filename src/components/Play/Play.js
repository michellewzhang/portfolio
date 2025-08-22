import "./Play.css";
import arrow from "../../images/arrow.png";

import { useState, useEffect } from "react";
import PlayGroup from "../PlayGroup/PlayGroup";

import { stickerImages } from "./stickerImages";
import { photoImages } from "./photoImages";

export default function Play() {
  const [isVisible, setIsVisible] = useState(false);
  const [, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const imageUrls = [
      ...stickerImages,
      ...photoImages
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
        // Trigger fade-in after all images are loaded
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };

    imageUrls.forEach(src => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; 
      img.src = src;
    });
  }, []);

  return (
    <>
      <div className={`play-header ${isVisible ? 'play-fade-in' : ''}`}>
        <span className="play-title">play</span>
        <img src={arrow} alt="arrow" className="arrow" />
        <span>creative explorations</span>
      </div>
      
      <div className={`play-groups-container ${isVisible ? 'play-fade-in' : ''}`}>
        <PlayGroup 
          images={stickerImages}
          columns={2}
          gap="8px"
          mainPhotoIndices={[0]}
        />
        <PlayGroup 
          images={photoImages}
          columns={3}
          gap="8px"
          mainPhotoIndices={[0]}
        />
      </div>
    </>
  );
}