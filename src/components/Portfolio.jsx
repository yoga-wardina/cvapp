import React from "react";
import PortfolioContent from "./PortfolioContent";
import { useState } from "react";
import asset1 from "../assets/asset1.jpg";
import asset2 from "../assets/asset2.jpg";
import asset3 from "../assets/asset3.jpg";
import asset4 from "../assets/asset4.jpg";
import asset5 from "../assets/asset5.jpg";
import asset6 from "../assets/asset6.jpg";
import asset7 from "../assets/asset7.jpg";
import asset8 from "../assets/asset8.jpg";
import asset9 from "../assets/asset9.jpg";
import view from "../assets/view.png";

function Portfolio() {
  const startH = "&lt;h1&gt;";
  const endH = "&lt;/h1&gt;";
  const startP = "&lt;p&gt;";
  const endP = "&lt;/p&gt;";
  const startSection = "&lt;section&gt;";
  const endtSection = "&lt;/section&gt;";
  const divs = [
    { id: 1, backgroundImage: asset1 },
    { id: 2, backgroundImage: asset2 },
    { id: 3, backgroundImage: asset9 },
    { id: 4, backgroundImage: asset3 },
    { id: 5, backgroundImage: asset4 },
    { id: 6, backgroundImage: asset5 },
    { id: 7, backgroundImage: asset6 },
    { id: 8, backgroundImage: asset7 },
    { id: 9, backgroundImage: asset8 },
    { id: 10, backgroundImage: asset9 },
  ];
  const [value, setValue] = useState(null);
  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };
  const DivWithBackgroundImage = ({ id, backgroundImage }) => {
    const styles = {
      backgroundImage: `url(${backgroundImage})`,
      width: "100%",
      transition: "all 1s ease",
      aspectRatio: "1/1",
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      cursor: "pointer",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div
        id={`${id}`}
        className="portfolioGridContent"
        style={styles}
        onClick={() => handleChangeValue(id)}
      >
        <span className="link-inside-div">
          <img src={view} alt="" />
        </span>
      </div>
    );
  };

  return (
    <div className="portfolio">
      <PortfolioContent value={value} onChangeValue={handleChangeValue} />
      <section id="portfolio" className="testing">
        <div className="headings">
          <div className="portHeadings">
            <h1 className="size80 bold">
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startH }}
              ></div>
              <b className="shadow color-cyan">M</b>
              <b className="bounce"> y &nbsp;</b>
              <b className="bounce"> P </b>
              <b className="bounce"> o </b>
              <b className="bounce"> r </b>
              <b className="bounce"> t </b>
              <b className="bounce"> f </b>
              <b className="bounce"> o </b>
              <b className="bounce"> l </b>
              <b className="bounce"> i </b>
              <b className="bounce"> o </b>
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: endH }}
              ></div>
            </h1>
            <p className="size-paragraph color-light-gray">
              <span
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startP }}
              ></span>
              A small collection of personals, passions, and school projects
              I've worked on over the years that I feel strongly represents my
              skills as a Web developer, If you like what you see here and want
              want to work with me feel free to{" "}
              <a className="color-cyan" href="#contact">
                Contact me
              </a>
              <span
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: endP }}
              ></span>
            </p>
          </div>
        </div>

        <div
          className="size30 fancyFont color-gray"
          dangerouslySetInnerHTML={{ __html: startSection }}
        ></div>
        <div className="portfolioGrid">
          {divs.map((div) => (
            <div className="noOverflow">
              <DivWithBackgroundImage
                id={div.id}
                backgroundImage={div.backgroundImage}
              />
            </div>
          ))}
        </div>
        <div
          className="size30 fancyFont color-gray"
          dangerouslySetInnerHTML={{ __html: endtSection }}
        ></div>
      </section>
    </div>
  );
}
export default Portfolio;
