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
    { id: 1, content: porto1, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 2, content: porto2, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 3, content: porto3, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 4, content: porto4, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 5, content: porto5, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 6, content: porto6, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 7, content: porto7, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 8, content: porto8, link: "https://github.com/IhateTikTok69/cvapp" },
    { id: 9, content: porto9, link: "https://github.com/IhateTikTok69/cvapp" },
    {
      id: 10,
      content: porto10,
      link: "https://github.com/IhateTikTok69/cvapp",
    },
  ];
	pv_category_status: data.pv_category_status,
    pv_category_provider: data.pv_category_provider,
    pv_category_desc: data.pv_category_desc,
    pv_category_struck: data.pv_category_struck,
    pv_category_name: data.pv_category_name,
  console.log(value)
  return (
    <>
      {portos.map((div) => (
        <div
          className={`ProjectCOntainer ${value === div.id ? "Project-active" : ""}`}
        >
          <div className="contentWrapper">
            <div className="close" onClick={closePorto}></div>
            <div className="projectContent">
              <img src={div.content} alt="" />
              <button className="closePorto shadow" onClick={closePorto}>
                X
              </button>
              <a href={div.link} className="to-git ">
                GitHub Link
              </a>
            </div>
            <div className="close" onClick={closePorto}></div>
          </div>
        </div>
      ))}
    </>
  );
}
export default PortfolioContent;
