import React from "react";
import Skills from "./Skills";

function Resume() {
  const startH = "&lt;h1&gt;";
  const endH = "&lt;/h1&gt;";
  const startP = "&lt;p&gt;";
  const endP = "&lt;/p&gt;";

  return (
    <div className="resume">
      <section id="resume" className="testing">
        <div className="headings">
          <div className="portHeadings">
            <h1 className="size80">
              <div
                className="fancyFont color-gray size30"
                dangerouslySetInnerHTML={{ __html: startH }}
              ></div>
              <b className="shadow color-cyan">S</b>
              <b className="bounce"> K </b>
              <b className="bounce"> i </b>
              <b className="bounce"> l </b>
              <b className="bounce"> l </b>
              <b className="bounce"> s </b>&nbsp;
              <b className="bounce"> & </b>&nbsp;
              <b className="shadow color-cyan">E</b>
              <b className="bounce"> x </b>
              <b className="bounce"> p </b>
              <b className="bounce"> e </b>
              <b className="bounce"> r </b>
              <b className="bounce"> i </b>
              <b className="bounce"> e </b>
              <b className="bounce"> n </b>
              <b className="bounce"> c </b>
              <b className="bounce"> e </b>
              <b className="bounce"> s </b>
              <div
                className="fancyFont color-gray size30"
                dangerouslySetInnerHTML={{ __html: endH }}
              ></div>
            </h1>
          </div>
        </div>
        <Skills />
      </section>
    </div>
  );
}
export default Resume;
