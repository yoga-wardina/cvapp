import React from "react";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import asset3 from "../assets/asset3.png";
import asset4 from "../assets/asset4.png";
import asset5 from "../assets/asset5.png";
import asset6 from "../assets/asset6.png";
import asset7 from "../assets/asset7.png";
import asset8 from "../assets/asset8.png";
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
    { id: 3, backgroundImage: asset3 },
    { id: 4, backgroundImage: asset4 },
    { id: 5, backgroundImage: asset5 },
    { id: 6, backgroundImage: asset6 },
    { id: 7, backgroundImage: asset8 },
    { id: 8, backgroundImage: asset1 },
    { id: 9, backgroundImage: asset3 },
    { id: 10, backgroundImage: asset7 },
  ];
  const DivWithBackgroundImage = ({ backgroundImage }) => {
    const styles = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      width: "100%",
      transition: "all 0.5s ease",
    };

    return (
      <div className="portfolioGridContent" style={styles}>
        <a className="link-inside-div" href="#">
          <img src={view} alt="" />
        </a>
      </div>
    );
  };
  return (
    <div className="portfolio">
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
            <p className="size-paragraph">
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startP }}
              ></div>
              A small collection of personals, passions, and schools' projects
              I've worked on over the years. that I feel strongly represents my
              skills as a Web developer, If you like what you see here and want
              want to work with me feel free to{" "}
              <a className="color-cyan" href="#section4">
                Contact me
              </a>
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: endP }}
              ></div>
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
                key={div.id}
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
