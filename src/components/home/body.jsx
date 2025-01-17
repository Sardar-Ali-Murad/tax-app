import React from "react";
import mobile from "../../assets/home/mobile.svg";
import computer from "../../assets/home/computer.svg";

const body = () => {
  return (
    <div className="home-body-wrap">
      <div className="body-text-wrap">
        <p>
          TaxReady.co.uk is specifically designed for UK small businesses,
          offering streamlined tax filing solutions. Accessible through desktop
          and mobile applications, it provides a convenient way to manage your
          tax responsibilities with HMRC.
        </p>
        <p>Complete your taxes within minutes not hours.</p>
      </div>
      <div className="body-img-wrap">
        <img src={mobile} className="mobile-img" />
        <img src={computer} className="computer-img" />
      </div>
    </div>
  );
};

export default body;
