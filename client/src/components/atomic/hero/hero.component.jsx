import React from "react";

import logo from "../../../assets/img/logo.png";
import logoBbc from "../../../assets/img/logo-bbc.png";
import logoForbes from "../../../assets/img/logo-forbes.png";
import logoTech from "../../../assets/img/logo-techcrunch.png";
import logoBi from "../../../assets/img/logo-bi.png";

const Template = () => {
  return (
    
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">BIGGEST HEADER</h1>
      <button className="btn header__btn">View more</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={logoBbc} alt="" />
        <img src={logoBi} alt="" />
        <img src={logoForbes} alt="" />
        <img src={logoTech} alt="" />
      </div>
    </header>
    
  );
};

export default Template;
