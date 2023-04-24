import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function ProjectsPage() {
  const activeSection = "portfolio";
  return (
    <div className="wrapper">
      <div className="globalContainer">
        <Navbar activeSection={activeSection} />
        <div className="container"></div>
      </div>
    </div>
  );
}
export default ProjectsPage;
