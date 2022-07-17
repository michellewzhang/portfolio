import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import About from "../components/About/About"; 
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0.5
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.6
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  const [whiteMode, setQuietMode] = useState(true);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <>
    <BrowserRouter>
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <section className="container-mode">
      <button onClick={handleModeChange} className="container-icon">
        {whiteMode ? <RiSunFill className="mode-icon" /> : <RiMoonClearFill className="mode-icon" />}
      </button>
      <div className="mode-left white-text">
        <ul>
          <li>
            <Link to="/"><span className="link-decoration">projects</span></Link>
          </li>
          <li>
            <Link to="/about"><span className="link-decoration">about</span></Link>
          </li>
        </ul>
      </div>
      </section>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}


function Projects() {
  return (
    <>
      <Header />
      <Project />
    </>
  );
}

export default App;
