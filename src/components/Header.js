import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div id="name">
        <h2>Gregory Hayes</h2>
        <h3>Web Developer</h3>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
