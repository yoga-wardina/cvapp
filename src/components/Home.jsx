import React from "react";
import scrollW from "../assets/scroll.png";
import scrollB from "../assets/scroll B.png";
import arrowL from "../assets/arrow.png";
import arrowR from "../assets/arrow B.png";

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
          <div className="welcome size50">
            <h1>
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startH }}
              ></div>
              Hi,
            </h1>
            <h1>
              I'm <b className="shadow color-cyan">Y</b>oga,
            </h1>
            <h1>
              Web Developer.
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
            <a href="#section4">Contact me!</a>
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
