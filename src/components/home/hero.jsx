import React from "react";
import arrow from "../../assets/home/arrow.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="home-hero-wrap">
      <div>
        <h1>Tax Made Simple.</h1>
      </div>
      <div className="home-hero-btn-wrap">
        <div className="learn-more-btn">
          <p className="pointer" onClick={() => navigate("/form")}>
            learn more
          </p>
        </div>
        <div className="free-btn">
          <p className="pointer" onClick={() => navigate("/form")}>
            Start for free
          </p>
          <div>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
