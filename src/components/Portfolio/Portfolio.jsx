import React from "react";
import Gericht from "../../assets/gericht.png";
import getlinked from "../../assets/get-linked.png";
import hoobank from "../../assets/hoobank.png";
import moviebox from "../../assets/movie-box.png";
import "./Portfolio.css";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Gericht} />
          </div>
          <h3>Gericht Fine Dining</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/Geritcht-Restaurant-"
              target="_blank"
              className="btn"
            >
              Github
              <FaLink />
            </a>
            <a
              href="https://ivys-gericht-fine-dining.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={hoobank} />
          </div>
          <h3>Hoobank Web App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/hoobank-app"
              target="_blank"
              className="btn"
            >
              Github
              <FaLink />
            </a>
            <a
              href="https://ivys-hoobank-app.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={moviebox} />
          </div>
          <h3>My Movie Box</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/movieBox2"
              target="_blank"
              className="btn"
            >
              Github
              <FaLink />
            </a>
            <a
              href="https://ivys-movies.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={getlinked} />
          </div>
          <h3>Get Linked: A Hackathon Project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/GetLinked"
              target="_blank"
              className="btn"
            >
              Github
              <FaLink />
            </a>
            <a
              href="https://ivys-getlinked.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
