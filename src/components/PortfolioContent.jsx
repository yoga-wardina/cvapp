import React from "react";
import porto1 from "../assets/porto (1).jpg";
import porto2 from "../assets/porto (2).jpg";
import porto3 from "../assets/porto (9).jpg";
import porto4 from "../assets/porto (3).jpg";
import porto5 from "../assets/porto (4).jpg";
import porto6 from "../assets/porto (5).jpg";
import porto7 from "../assets/porto (6).jpg";
import porto8 from "../assets/porto (7).jpg";
import porto9 from "../assets/porto (8).jpg";
import porto10 from "../assets/porto (9).jpg";
function PortfolioContent({ value, onChangeValue }) {
  const closePorto = () => {
    onChangeValue(0);
  };
  const portos = [
    { id: 1, content: porto1 },
    { id: 2, content: porto2 },
    { id: 3, content: porto3 },
    { id: 4, content: porto4 },
    { id: 5, content: porto5 },
    { id: 6, content: porto6 },
    { id: 7, content: porto7 },
    { id: 8, content: porto8 },
    { id: 9, content: porto9 },
    { id: 10, content: porto10 },
  ];
  return (
    <>
      {portos.map((div) => (
        <div
          className={`ProjectCOntainer ${
            value === div.id ? "Project-active" : ""
          }`}
        >
          <div className="contentWrapper">
            <div className="close" onClick={closePorto}></div>
            <div className="projectContent">
              <img src={div.content} alt="" />
            </div>
            <div className="close" onClick={closePorto}></div>
          </div>
        </div>
      ))}
    </>
  );
}
export default PortfolioContent;
