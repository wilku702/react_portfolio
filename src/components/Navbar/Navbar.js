import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import { staggerOne, bannerFadeInVariants } from '../../motionUtils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (state) => {
    setIsMenuOpen(state);
  };

  return (
    <motion.nav
      className="navigation-wrapper"
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
      aria-label="Main navigation">
      <motion.div variants={bannerFadeInVariants}>
        <NavLink to="/">
          <img className="navigation-logo" src="./logo/W.svg" alt="Site Icon" />
        </NavLink>
      </motion.div>
      <ul className="navigation-menu">
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <NavLink to="/work" className="bar-link">
              work
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <NavLink to="/about" className="bar-link">
              about
            </NavLink>
          </motion.div>
        </li>
      </ul>
      <motion.div
        variants={bannerFadeInVariants}
        className={`toggle-menu ${isMenuOpen ? 'active' : 'hidden'}`}>
        <button
          className="menu-status-off"
          onClick={() => handleClick(true)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu">
          menu
        </button>
        <button
          className="menu-status-on"
          onClick={() => handleClick(false)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Close menu">
          close
        </button>
        <ul className="toggle-menu-items" id="mobile-menu" role="menu">
          <li role="none">
            <NavLink
              to="/"
              className="menu-link"
              role="menuitem"
              onClick={() => handleClick(false)}>
              home
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/work"
              className="menu-link"
              role="menuitem"
              onClick={() => handleClick(false)}>
              work
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/about"
              className="menu-link"
              role="menuitem"
              onClick={() => handleClick(false)}>
              about
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
