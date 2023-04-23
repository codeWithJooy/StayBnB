import React from "react";
import "./Home.css";
import MainBg from "../../Assets/Home/mainBg.jpg";
export const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <TopSection />
      </div>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="topSection">
      <img src={MainBg} />
      <div className="topContainer">
        <div className="topTextContainer">
          <div className="topText">
            <p>Its time for new</p>
          </div>
          <div className="topTextBold">
            <p>Adventure</p>
          </div>
        </div>
      </div>
    </div>
  );
};
