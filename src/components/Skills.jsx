import React from "react";

function Skills() {
  const startP = "&lt;p&gt;";
  const endP = "&lt;/p&gt;";

  return (
    <div className="skill-grid">
      <div className="section-with-lines">
        <div className="content-with-lines">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>2018 - 2023</p>
          </div>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: startP }}
          ></div>
          <p className="size15">Bachelor of Computer Science</p>
          <p className="color-gray">AMIKOM UNIVERSITY</p>
          <p className="">
            I've finished my bachelor degree on computer scinece (Informatika)
            <br />
            during this time I won an AMICTA awards for game development
            category in 2019 <br />
            and Finished my thesis with an A <br />
            <b>+CISCO CCNA CERTIFICATION</b>
          </p>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: endP }}
          ></div>
        </div>
        <div className="content-with-lines">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>2013-2016</p>
          </div>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: startP }}
          ></div>
          <p className="size15">Highschool DIploma</p>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: endP }}
          ></div>
        </div>
        <div className="content-with-lines">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>2019</p>
          </div>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: startP }}
          ></div>
          <p className="size15">ENGLISH PROFIENCY</p>
          <p className="color-gray">AMIKOM UNIVERSITY</p>
          <p className="">
            I scored 590 on official TOEFL by ETS. <br /> I am certifiably
            recognized to be able to flexibly use the English language on
            social, academical and professional levels
          </p>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: endP }}
          ></div>
        </div>
      </div>
      <div className="section-with-lines">
        <div className="skill-list">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>LANGUAGE</p>
          </div>
          <p>HTML/CSS</p>
          <div className="progress-bar-baseline">
            <div className="html-css"></div>
          </div>
          <p>JavaScript</p>
          <div className="progress-bar-baseline">
            <div className="blue80"></div>
          </div>
          <p>PHP</p>
          <div className="progress-bar-baseline">
            <div className="blue80"></div>
          </div>
          <p>SQL</p>
          <div className="progress-bar-baseline">
            <div className="blue60"></div>
          </div>
          <br /> <br />
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>FRAMEWORKS</p>
          </div>
          <p>React JS</p>
          <div className="progress-bar-baseline">
            <div className="red70"></div>
          </div>
          <p>REST API</p>
          <div className="progress-bar-baseline">
            <div className="red70"></div>
          </div>
          <p>Next JS</p>
          <div className="progress-bar-baseline">
            <div className="red60"></div>
          </div>
          <p>Laravel</p>
          <div className="progress-bar-baseline">
            <div className="red80"></div>
          </div>
          <p>Jquery</p>
          <div className="progress-bar-baseline">
            <div className="red80"></div>
          </div>
          <p>Bootsrtap / tailwind CSS</p>
          <div className="progress-bar-baseline">
            <div className="red90"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
