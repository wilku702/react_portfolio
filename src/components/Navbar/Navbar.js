<<<<<<< HEAD
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import { staggerOne, bannerFadeInVariants } from '../../motionUtils';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleClick = (state) => {
    setActiveIndex(state);
  };

  return (
    <motion.div
      className="navigation-wrapper"
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit">
      <motion.div variants={bannerFadeInVariants}>
        <NavLink to="/">
          <img className="navigation-logo" src="./logo/W.svg" alt="Site Icon" />
        </NavLink>
      </motion.div>
      <ul className="navigation-menu">
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <NavLink to="/about" className="bar-link">
              about
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <a
              href="https://drive.google.com/file/d/15y7eIv9nvPGdyHCBrwOS1uStmJm7Xde6/view?usp=sharing"
              target="_blank"
              className="bar-link">
              resume
            </a>
          </motion.div>
        </li>
      </ul>
      <motion.div
        variants={bannerFadeInVariants}
        className={`toggle-menu ${activeIndex ? 'active' : 'hidden'}`}>
        <div className="menu-status-off" onClick={() => handleClick(true)}>
          menu
        </div>
        <div className="menu-status-on" onClick={() => handleClick(false)}>
          close
        </div>
        <ul className="toggle-menu-items">
          <li>
            <NavLink
              to="/"
              className="menu-link"
              onClick={() => handleClick(false)}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="menu-link"
              onClick={() => handleClick(false)}>
              about
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/15y7eIv9nvPGdyHCBrwOS1uStmJm7Xde6/view?usp=sharing"
              target="_blank"
              className="menu-link"
              onClick={() => handleClick(false)}>
              resume
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
=======
import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigation-wrapper">
      <NavLink to="/">
        <img
          className="navigation-logo"
          src="./logo/logowhite.png"
          alt="Site Icon"
        />
      </NavLink>
      <ul className="navigation-menu">
        <li>
          <NavLink to="/about" className="bar-link">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="bar-link">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="bar-link">
            experience
          </NavLink>
        </li>
      </ul>
    </div>
>>>>>>> ebd69c1e7ae9403d70f3befda851b6d60b6f6956
  );
};

export default Navbar;
