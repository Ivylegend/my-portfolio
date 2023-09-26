import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="">
      <a className="footer__logo">JUST_IVY</a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Icha Victory, All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
