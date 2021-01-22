import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="gradient">
        <Header />
        <Projects />
      </div>
    </div>
  );
}

export default App;
