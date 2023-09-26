import React from "react";
import CTA from "./CTA";
import Me from "../../assets/mypics.png";
import HeaderSocials from "./HeaderSocials";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there, I'm</h5>
        <h1>Icha Victory</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me}/>
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
