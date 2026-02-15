// Footer component
import './Footer.css';
import { useNavigationConfirm } from '../../context/NavigationContext';

import { motion } from 'framer-motion';
import {
  staggerOne,
  bannerFadeInUpVariants
} from '../../motionUtils';
import { socialLinks, workLinks, contactEmail } from '../../data/siteConfig';

const Footer = () => {
  const { confirmNavigation } = useNavigationConfirm();

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
            <a href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </h4>
        </motion.div>
        <motion.div
          variants={bannerFadeInUpVariants}
          className="footer-info-item"
          id="media">
          <h4 className="footer-info-header">
            <br /> let&apos;s connect
          </h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.id} id={link.id}>
                <button
                  className="footer-ext-link"
                  onClick={() => confirmNavigation(link.url)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={bannerFadeInUpVariants}
          className="footer-info-item"
          id="code">
          <h4 className="footer-info-header">
            <br /> my work
          </h4>
          <ul>
            {workLinks.map((link) => (
              <li key={link.id} id={link.id}>
                <button
                  className="footer-ext-link"
                  onClick={() => confirmNavigation(link.url)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
