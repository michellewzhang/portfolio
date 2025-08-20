import "./Play.css";
import arrow from "../../images/arrow.png";

export default function Play() {
  return (
    <>
        <div className="play-header">
        <span className="play-title">play</span>
        <img src={arrow} alt="arrow" className="arrow" />
        <span>explorations in photography & more</span>
        </div>
    </>
  );
}