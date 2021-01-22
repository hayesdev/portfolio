import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
