import React from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ParallaxOne from "./components/ParallaxOne";
import ParallaxTwo from "./components/ParallaxTwo";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
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
