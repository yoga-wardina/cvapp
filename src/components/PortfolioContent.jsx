import React from "react";

function PortfolioContent({ value, onChangeValue }) {
  const handleClick = () => {
    onChangeValue(0);
  };
  return (
    <>
      <div
        className={`ProjectCOntainer ${value === 1 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (1).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 2 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (2).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 3 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (9).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 4 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (3).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 5 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (4).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 6 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (5).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 7 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (6).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 8 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (7).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 9 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (8).jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 10 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button className="closePorto" onClick={handleClick}>
            <b className="shadow color-white">X</b>
          </button>
          <div className="projectContent">
            <img src="/assets/porto (9).jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default PortfolioContent;
