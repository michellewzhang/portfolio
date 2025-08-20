import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import About from "../components/About/About"; 
import Ripe from "../components/Ripe/Ripe";
import Sentry from "../components/Sentry/Sentry";
import Schema from "../components/Schema/Schema";
import Choosie from "../components/Choosie/Choosie";
import Awareai from "../components/Awareai/Awareai";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import Clock from "../components/Clock/Clock";
import backToTop from "../images/back_to_top.png";
import Play from "../components/Play/Play";
import "./App.css";

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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
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

  return (
    <>
    <BrowserRouter>
    <Wrapper>
    <div>
      <section>
      <Navigation />
      </section>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/sentry" element={<Sentry />} />
          <Route path="/schema" element={<Schema />} />
          <Route path="/ripe" element={<Ripe />} />
          <Route path="/awareai" element={<Awareai />} />
          <Route path="/choosie" element={<Choosie />} />
        </Route>
      </Routes>
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src={backToTop} alt="back to top" className="back-to-top-img" />
        </button>
      )}
      </div>
      </Wrapper>
    </BrowserRouter>
    </>
  );
}

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/" && location.pathname === "/projects") return true;
    if (path === location.pathname) return true;
    return false;
  };

  return (
    <div className="navigation">
      <div className="navigation-left">
        <Logo />
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              <span className="link-decoration">work</span>
            </Link>
          </li>
          <li>
            <Link to="/play" className={isActive("/play") ? "active" : ""}>
              <span className="link-decoration">play</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              <span className="link-decoration">about</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation-right">
        <Clock />
      </div>
    </div>
  );
};

const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <motion.img 
      src={logo} 
      alt="logo" 
      className="logo" 
      onClick={() => navigate("/")}
      style={{ cursor: 'pointer' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        duration: 0.2
      }}
    />
  );
};

function Projects() {
  return (
    <>
      <Header />
      <Project />
    </>
  );
}

export default App;
