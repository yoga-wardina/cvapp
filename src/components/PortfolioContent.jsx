import React from "react";

function PortfolioContent({ imagePaths }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imagePaths})`,
        height: "300px",
        width: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
export default PortfolioContent;
