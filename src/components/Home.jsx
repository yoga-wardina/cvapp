import React from "react";
import scrollW from "../assets/scroll.png";
import scrollB from "../assets/scroll B.png";
import arrowL from "../assets/arrow.png";
import arrowR from "../assets/arrow B.png";
import idk from "../assets/arrows.png";
function Home() {
  const startH = "&lt;h1&gt;";
  const endH = "&lt;/h1&gt;";
  const startHtm = "&lt;html&gt;";
  const endHtm = "&lt;/html&gt;";
  const startBody = "&lt;body&gt;";
  const endBody = "&lt;/body&gt;";
  const startP = "&lt;p&gt;";
  const endP = "&lt;/p&gt;";

  return (
    <div className="home">
      <section id="home" className="testing">
        <div className="headings">
          <div
            className="size30 fancyFont color-gray"
            dangerouslySetInnerHTML={{ __html: startHtm }}
          ></div>
          <div
            className="size30 fancyFont indent color-gray"
            dangerouslySetInnerHTML={{ __html: startBody }}
          ></div>
          <div className="welcome size80">
            <img src={idk} className="hover-me hover-style" alt="" />{" "}
            <b className="fancyFont color-gray hover-me hover-style2">
              HOVER ME
            </b>
            <h1>
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startH }}
              ></div>
              <b className="shadow color-cyan">H</b>
              <b className="bounce"> i </b>
              <b className="bounce"> , </b>
            </h1>
            <h1>
              <b className="bounce"> I </b>
              <b className="bounce"> ' </b>
              <b className="bounce"> m &nbsp;</b>
              <b className="shadow color-cyan">Y</b>
              <b className="bounce"> o </b>
              <b className="bounce"> g </b>
              <b className="bounce"> a </b>
              <b className="bounce"> , </b>
            </h1>
            <h1>
              <b className="bounce"> W </b>
              <b className="bounce"> e </b>
              <b className="bounce"> b &nbsp;</b>
              <b className="bounce"> D </b>
              <b className="bounce"> e </b>
              <b className="bounce"> v </b>
              <b className="bounce"> e </b>
              <b className="bounce"> l </b>
              <b className="bounce"> o </b>
              <b className="bounce"> p </b>
              <b className="bounce"> e </b>
              <b className="bounce"> r </b>
              <b className="bounce"> . </b>
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: endH }}
              ></div>
            </h1>
            <div
              className="size30 fancyFont color-gray"
              dangerouslySetInnerHTML={{ __html: startP }}
            ></div>
            <p className="size15 color-light-gray">
              Front-end Developer / Back-end Developer / Full-stack
            </p>
            <div
              className="size30 fancyFont color-gray"
              dangerouslySetInnerHTML={{ __html: endP }}
            ></div>
          </div>
          <div className="cta">
            <a href="#contact">Contact me!</a>
          </div>
        </div>
        <div className="scroll">
          <img className="animated-image" src={scrollW} alt="" />
          <br />
          <img src={arrowL} alt="" />
        </div>
        <div className="scroll-right">
          <img className="animated-image" src={scrollB} alt="" />
          <br />
          <img src={arrowR} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Home;
