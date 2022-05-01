import React from "react";
import './Footer.css'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="back-to-top" aria-label="go back to top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <hr />
        <p className="footer__text">
          &copy; {year}<span id="year"></span> Copyright by Your Tour Guide.{" "}|{" "}
          <a
            href="https://github.com/mamaruf04"
            target="_blank"
            rel="noopener noreferrer"
          >
          Masudul Alam Maruf
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
