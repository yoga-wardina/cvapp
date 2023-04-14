import { useState, useEffect } from "react";
import { useRef } from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("section1");
  const globalContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const sectionTops = {};

      sections.forEach((section) => {
        sectionTops[section.id] = section.offsetTop;
      });

      const offset = 300; // adjust this value to fine-tune the offset
      const scrollPosition =
        document.documentElement.scrollTop +
        globalContainerRef.current.scrollTop +
        offset;

      const newActiveSection = Object.keys(sectionTops).reduce((a, b) => {
        return sectionTops[a] < scrollPosition &&
          sectionTops[b] > scrollPosition
          ? a
          : b;
      });

      setActiveSection(newActiveSection);
    };

    handleScroll();

    globalContainerRef.current.addEventListener("scroll", handleScroll);

    return () =>
      globalContainerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="globalContainer" ref={globalContainerRef}>
        <Navbar activeSection={activeSection} />
        <div className="container">
          <Home />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default App;
