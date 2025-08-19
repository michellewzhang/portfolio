import "./Header.css";
import arrow from "../../images/arrow.png";

export default function Header() {
  return (
    <section className="header">
      <header>
        <h1>  
          <span className="header-title">michelle zhang</span>
          <img className="header-arrow"src={arrow} alt="arrow" />
          <span className="header-description">developer & designer based in san francisco.</span>
        </h1>
      </header>
    </section>
  );
}

// updated aug 2025