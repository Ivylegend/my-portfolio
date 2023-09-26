import React from "react";
import Me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './About.css';

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
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>300+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            dicta tempora! Impedit blanditiis illo minus odio omnis aut
            assumenda, architecto perspiciatis, expedita deleniti nobis?
            Similique fugiat iure obcaecati consequuntur ea!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
