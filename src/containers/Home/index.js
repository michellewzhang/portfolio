import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

function Home() {
  const [whiteMode, setQuietMode] = useState(true);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode handleModeChange={handleModeChange} />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
