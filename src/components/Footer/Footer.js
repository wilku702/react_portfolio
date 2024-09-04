import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">Made by Will Kung</div>
      <div className="footer-icons">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noreferrer">
          <img src="./logo/github.svg" alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer">
          <img src="./logo/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
