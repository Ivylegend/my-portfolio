import React from "react";
import Box from "../../assets/Rectangle.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Box} />
          </div>
          <h3>Gericht Fine Dining</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/Geritcht-Restaurant-"
              target="_blank"
              className="btn"
            >
              Github
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
            <img src={Box} />
          </div>
          <h3>GPT 3</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/hoobank-app"
              target="_blank"
              className="btn"
            >
              Github
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
            <img src={Box} />
          </div>
          <h3>My Movie Box</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/movieBox2"
              target="_blank"
              className="btn"
            >
              Github
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
            <img src={Box} />
          </div>
          <h3>Item Title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ivylegend/GetLinked"
              target="_blank"
              className="btn"
            >
              Github
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
