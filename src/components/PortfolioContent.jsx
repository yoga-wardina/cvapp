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
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 2 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 3 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 4 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 5 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 6 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 7 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 8 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 9 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
      <div
        className={`ProjectCOntainer ${value === 10 ? "Project-active" : ""}`}
      >
        <button onClick={handleClick}> X </button>
      </div>
    </>
  );
}
export default PortfolioContent;
