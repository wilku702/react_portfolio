import React from 'react';
import './Footer.css';

import { motion } from 'framer-motion';
import {
  staggerOne,
  bannerFadeInUpVariants
} from '../../motionUtils';

const Footer = () => {
  const footerLinks = [
    {
      id: 'ig',
      url: 'https://instagram.com/willkung72',
      platform: 'instagram',
      delay: '0.6s'
    },
    {
      id: 'li',
      url: 'https://www.linkedin.com/in/willkung702/',
      platform: 'linkedin',
      delay: '0.8s'
    }
  ];

  return (
    <motion.div
      variants={staggerOne}
      initial="initial"
      animate="animate"
      className="footer-container">
      <div className="footer-border" />
      <div className="footer-info">
        <motion.div
          variants={bannerFadeInUpVariants}
          className="footer-info-item"
          id="personal">
          <h4 className="footer-info-header">
            reach out to me <br /> through email
          </h4>
          <h4>
            <a
              href="mailto:wkung2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              wkung2004@gmail.com
            </a>
          </h4>
        </motion.div>
        <motion.div
          variants={bannerFadeInUpVariants}
          className="footer-info-item"
          id="media">
          <h4 className="footer-info-header">
            <br /> let's connect
          </h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id} id={link.id}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={bannerFadeInUpVariants}
          className="footer-info-item"
          id="code">
          <h4 className="footer-info-header">
            <br /> my codespace
          </h4>
          <h4>
            <a
              href="https://github.com/wilku702"
              target="_blank"
              rel="noopener noreferrer">
              github
            </a>
          </h4>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
