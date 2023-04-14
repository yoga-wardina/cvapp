import React from "react";

function Portfolio() {
  const startH = "&lt;h1&gt;";
  const endH = "&lt;/h1&gt;";
  const startP = "&lt;p&gt;";
  const endP = "&lt;/p&gt;";

  return (
    <div className="portfolio">
      <section id="portfolio" className="testing">
        <div className="headings">
          <div className="welcome">
            <h1 className="size50">
              <div
                className="size30 fancyFont color-gray"
                dangerouslySetInnerHTML={{ __html: startH }}
              ></div>
              My Portfolio
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
      </section>
    </div>
  );
}
export default Portfolio;
