import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://ng.linkedin.com/in/icha-victory-b6150b269"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ivylegend" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/ivy_codes" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
