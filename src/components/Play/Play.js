import "./Play.css";
import arrow from "../../images/arrow.png";
import { useState, useEffect } from "react";

export default function Play() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <div className={`play-header ${isVisible ? 'play-fade-in' : ''}`}>
        <span className="play-title">play</span>
        <img src={arrow} alt="arrow" className="arrow" />
        <span>explorations in photography & more</span>
        </div>
    </>
  );
}