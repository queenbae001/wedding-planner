import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section brand">
          <h2 className="logo">Queenie Wedding Planner</h2>
          <p>
            Creating timeless, elegant, and unforgettable wedding experiences.
            We turn your dream celebration into reality with style and grace.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: queendera222@gmail.com</p>
          <p>Phone: +234 (703) 0964-534</p>
          <p>Location: 28 Fauson Avenue prefab, owerri, imo state</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Queenie Wedding Planner. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;