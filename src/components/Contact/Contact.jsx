import React from "react";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container__contact container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>victoryicha2@gmail.com</h5>
            <a target="_blank" href="mailto:victoryicha2@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdEmail />
            <h4>Telegram</h4>
            <h5>Ivylegend</h5>
            <a href="https://t.me/ivyLegend" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdEmail />
            <h4>Twitter</h4>
            <h5>Ivy_codes</h5>
            <a href="https://twitter.com/ivy_codes" target="_blank">
              Check me out on Twitter
            </a>
          </article>
        </div>
        <form className="contact__form" action="">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
