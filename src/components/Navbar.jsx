import React from "react";

function Navbar(props) {
  const { activeSection } = props;

  return (
    <div className="sideBar bg-color-dark-gray">
      <div className="center">
        <a
          className={`navLink ${activeSection === "home" ? "active" : ""}`}
          href="#home"
        >
          Home
        </a>
        <a
          id="navLink"
          className={`navLink ${activeSection === "portfolio" ? "active" : ""}`}
          href="#portfolio"
        >
          Portfolio
        </a>
        <a
          id="navLink"
          className={`navLink ${activeSection === "resume" ? "active" : ""}`}
          href="#resume"
        >
          Resume
        </a>
        <a
          id="navLink"
          className={`navLink ${activeSection === "contact" ? "active" : ""}`}
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;
