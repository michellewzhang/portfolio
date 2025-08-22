import "./Play.css";
import arrow from "../../images/arrow.png";
import sticker1 from "../../images/play/sticker/sticker_1.jpg";
import sticker2 from "../../images/play/sticker/sticker_2.jpg";
import sticker3 from "../../images/play/sticker/sticker_3.png";
import photo1 from "../../images/play/photos/photo1.jpg";
import photo2 from "../../images/play/photos/photo2.JPG";
import photo3 from "../../images/play/photos/photo3.jpg";
import photo4 from "../../images/play/photos/photo4.jpg";
import photo5 from "../../images/play/photos/photo5.jpg";
import photo6 from "../../images/play/photos/photo6.jpg";
import photo7 from "../../images/play/photos/photo7.jpg";
import photo8 from "../../images/play/photos/photo8.jpg";
import photo9 from "../../images/play/photos/photo9.jpg";
import { useState, useEffect } from "react";
import PlayGroup from "../PlayGroup/PlayGroup";

export default function Play() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const stickerImages = [
    {
      src: sticker3,
      alt: "Sticker 3"
    },
    {
      src: sticker1,
      alt: "Sticker 1"
    },
    {
      src: sticker2,
      alt: "Sticker 2"
    },
  ];

  const photoImages = [
    {
      src: photo1,
      alt: "Photo 1"
    },
    {
      src: photo2,
      alt: "Photo 2"
    },
    {
      src: photo3,
      alt: "Photo 3"
    },
    {
      src: photo4,
      alt: "Photo 4"
    },
    {
      src: photo5,
      alt: "Photo 5"
    },
    {
      src: photo6,
      alt: "Photo 6"
    },
    {
      src: photo7,
      alt: "Photo 7"
    },
    {
      src: photo8,
      alt: "Photo 8"
    },
    {
      src: photo9,
      alt: "Photo 9"
    },
  ]

  return (
    <>
      <div className={`play-header ${isVisible ? 'play-fade-in' : ''}`}>
        <span className="play-title">play</span>
        <img src={arrow} alt="arrow" className="arrow" />
        <span>creative explorations</span>
      </div>
      
      <div className="play-groups-container">
        <PlayGroup 
          images={stickerImages}
          columns={2}
          gap="8px"
          mainPhotoIndex={0}
        />
        <PlayGroup 
          images={photoImages}
          columns={3}
          gap="8px"
          mainPhotoIndex={0}
        />
      </div>
    </>
  );
}