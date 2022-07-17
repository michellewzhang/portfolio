import "./Mode.css";
import { RiSunFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

export default function Mode({ handleModeChange }) {
  return (
    <section className="container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href=""><span class="link-decoration">home</span></a>
          </li>
          <li>
            <a href=""><span class="link-decoration">projects</span></a>
          </li>
          <li>
            <a href=""><span class="link-decoration">about</span></a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        <RiSunFill className="mode-icon" />
      </button>
    </section>
  );
}
