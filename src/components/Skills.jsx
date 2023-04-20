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
          <p className="size15">Computer Science Major</p>
          <p className="color-gray">AMIKOM UNIVERSITY</p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            quaerat beatae assumenda voluptatibus modi distinctio impedit
            recusandae deleniti maxime ratione a cum itaque.
          </p>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: endP }}
          ></div>
        </div>
        <div className="content-with-lines">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>2016</p>
          </div>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: startP }}
          ></div>
          <p className="size15">Highschool DIploma</p>
          <p className="color-gray">AMIKOM UNIVERSITY</p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            quaerat beatae assumenda voluptatibus modi distinctio impedit
            recusandae deleniti maxime ratione a cum itaque.
          </p>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: endP }}
          ></div>
        </div>
        <div className="content-with-lines">
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>2020 - 2023</p>
          </div>
          <div
            className="fancyFont color-gray size30"
            dangerouslySetInnerHTML={{ __html: startP }}
          ></div>
          <p className="size15">Free Lancing as a web Dev</p>
          <p className="color-gray">Fiver</p>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            quaerat beatae assumenda voluptatibus modi distinctio impedit
            recusandae deleniti maxime ratione a cum itaque.
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
            <p>Front-end</p>
          </div>
          <p>HTML/CSS</p>
          <div className="progress-bar-baseline">
            <div className="html-css"></div>
          </div>
          <p>JS</p>
          <div className="progress-bar-baseline">
            <div className="js"></div>
          </div>
          <p>React</p>
          <div className="progress-bar-baseline">
            <div className="react"></div>
          </div>
          <br /> <br />
          <div className="content-heading box-shadow bg-color-cyan color-dark">
            <p>Back-end</p>
          </div>
          <p>SQL</p>
          <div className="progress-bar-baseline">
            <div className="sql"></div>
          </div>
          <p>PHP</p>
          <div className="progress-bar-baseline">
            <div className="php"></div>
          </div>
          <p>Next JS</p>
          <div className="progress-bar-baseline">
            <div className="next"></div>
          </div>
          <p>Express</p>
          <div className="progress-bar-baseline">
            <div className="express"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
