import "./Header.css";
import arrow from "../../images/arrow.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="header">
      <header>
        <h1 className={isVisible ? 'header-fade-in' : ''}>  
          <span className="header-title">michelle zhang</span>
          <img className="header-arrow"src={arrow} alt="arrow" />
          <span className="header-description">developer & designer based in san francisco. 
            currently swe @ <a href="https://sentry.io/welcome/" target="_blank" rel="noopener noreferrer" className="highlight-link">
            sentry</a>.</span>
        </h1>
      </header>
    </section>
  );
}
