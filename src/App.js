import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Parallax from "./components/Parallax";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Welcome />
      <About />
      <Parallax />
      <Footer />
    </div>
  );
}

export default App;
