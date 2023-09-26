import React from "react";
import Me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>

          <p>
            I am a budding Frontend Developer with over 3 years of experience in
            crafting user-friendly websites. My passion lies in turning creative
            ideas into engaging digital experiences. I thrive on problem-solving
            and continuously seek innovative solutions to deliver outstanding
            results for clients and users alike.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
