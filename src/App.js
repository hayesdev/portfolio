import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import ParallaxOne from "./components/ParallaxOne";
import ParallaxTwo from "./components/ParallaxTwo";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Welcome />
      <About />
      <ParallaxOne />
      <Projects />
      <ParallaxTwo />
      <Footer />
    </div>
  );
}

export default App;
