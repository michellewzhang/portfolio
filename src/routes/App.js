import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import About from "../components/About/About"; 
import Creative from "../components/Creative/Creative";
import Meta from "../components/Meta/Meta";
import Ripe from "../components/Ripe/Ripe";
import Schema from "../components/Schema/Schema";
import Choosie from "../components/Choosie/Choosie";
import Awareai from "../components/Awareai/Awareai";
import Verizon from "../components/Verizon/Verizon";
import Optimize from "../components/Optimize/Optimize";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";
import { FiArrowUpCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname]);
  return children;
} 

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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <>
    <BrowserRouter>
    <Wrapper>
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <section className="container-mode">
      <button onClick={handleModeChange} className="container-icon">
        {whiteMode ? <RiSunFill className="mode-icon" /> : <RiMoonClearFill className="mode-icon" />}
      </button>
      <div className="mode-left white-text">
        <ul>
          <li>
            <Link to="/user/mwzhang/"><span className="link-decoration">projects</span></Link>
          </li>
          <li>
            <Link to="/user/mwzhang/about"><span className="link-decoration">about</span></Link>
          </li>
        </ul>
      </div>
      </section>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/user/mwzhang" element={<Projects />} />
          <Route path="/user/mwzhang/about" element={<About />} />
          <Route path="/user/mwzhang/creative" element={<Creative />} />
          <Route path="/user/mwzhang/meta" element={<Meta />} />
          <Route path="/user/mwzhang/verizon" element={<Verizon />} />
          <Route path="/user/mwzhang/schema" element={<Schema />} />
          <Route path="/user/mwzhang/ripe" element={<Ripe />} />
          <Route path="/user/mwzhang/awareai" element={<Awareai />} />
          <Route path="/user/mwzhang/choosie" element={<Choosie />} />
          <Route path="/user/mwzhang/optimize" element={<Optimize />} />
        </Route>
      </Routes>
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FiArrowUpCircle/>
        </button>
      )}
      </div>
      </Wrapper>
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
