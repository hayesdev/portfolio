import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Welcome />
      <About />
      <Parallax />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
