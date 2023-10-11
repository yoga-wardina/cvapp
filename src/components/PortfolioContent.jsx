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
          <button onClick={handleClick}> X </button>
          <div className="projectContent">
            <h1 style={{ color: `black;` }}>{value}</h1>
          </div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 2 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 3 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 4 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 5 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 6 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 7 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 8 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 9 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
      <div
        className={`ProjectCOntainer ${value === 10 ? "Project-active" : ""}`}
      >
        <div className="contentWrapper">
          <button onClick={handleClick}> X </button>
          <div className="projectContent"></div>
        </div>
      </div>
    </>
  );
}
export default PortfolioContent;
