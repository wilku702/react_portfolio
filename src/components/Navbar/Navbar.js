import React, { useState } from 'react';
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
      className="fixed top-0 left-0 w-full flex items-center justify-between h-20 z-20 px-6 md:px-12"
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={bannerFadeInVariants} className="flex items-center">
        <NavLink to="/" className="flex items-center">
          <img
            className="w-12 h-auto transition-transform duration-300 hover:scale-110"
            src="./logo/W.svg"
            alt="Site Icon"
          />
        </NavLink>
      </motion.div>
      <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <NavLink
              to="/about"
              className="text-text transition-transform duration-300 hover:scale-110"
            >
              about
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div variants={bannerFadeInVariants}>
            <a
              href="https://drive.google.com/file/d/16GZNTunAN-zW5FVHhaSBrJUaG9L8IIh5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text transition-transform duration-300 hover:scale-110"
            >
              resume
            </a>
          </motion.div>
        </li>
      </ul>
      <motion.div
        variants={bannerFadeInVariants}
        className="md:hidden flex flex-col items-end"
      >
        <button
          className="text-lg font-medium text-text"
          onClick={() => handleClick(!activeIndex)}
        >
          {activeIndex ? 'close' : 'menu'}
        </button>
        <div
          className={`${
            activeIndex ? 'opacity-100 visible' : 'opacity-0 invisible'
          } transition-all duration-300 mt-2 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/10`}
        >
          <ul className="flex flex-col px-4 py-3 text-main text-base font-semibold space-y-2 min-w-[150px]">
            <li>
              <NavLink
                to="/"
                className="block"
                onClick={() => handleClick(false)}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block"
                onClick={() => handleClick(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/16GZNTunAN-zW5FVHhaSBrJUaG9L8IIh5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => handleClick(false)}
              >
                resume
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
