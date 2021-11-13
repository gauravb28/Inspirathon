import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Name<span>bla bla</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Name &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>21 Revolution Street</span> Delhi, India
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 555 123456</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">contact@name.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the website</span>
            Name is a website to make the goods made by highly skilled women
            artisans to the public.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
