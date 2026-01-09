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
      className="fixed top-0 left-0 w-full flex items-center justify-between h-20 z-50 px-6 md:px-12 bg-background/40 backdrop-blur-sm"
      variants={staggerOne}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={bannerFadeInVariants}
        className="flex items-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink to="/" className="flex items-center">
          <img
            className="w-12 h-auto transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(148,174,247,0.6)]"
            src="./logo/W.svg"
            alt="Site Icon"
          />
        </NavLink>
      </motion.div>
      <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
        <li>
          <motion.div
            variants={bannerFadeInVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/about"
              className="relative text-text transition-all duration-300 group inline-block"
            >
              <span className="relative z-10 group-hover:text-main transition-colors duration-300">about</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={bannerFadeInVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://drive.google.com/file/d/16GZNTunAN-zW5FVHhaSBrJUaG9L8IIh5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-text transition-all duration-300 group inline-block"
            >
              <span className="relative z-10 group-hover:text-main transition-colors duration-300">resume</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>
        </li>
      </ul>
      <motion.div
        variants={bannerFadeInVariants}
        className="md:hidden flex flex-col items-end relative"
      >
        <motion.button
          className="text-lg font-medium text-text relative group z-50 px-3 py-2"
          onClick={() => handleClick(!activeIndex)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="group-hover:text-main transition-colors duration-300">
            {activeIndex ? 'close' : 'menu'}
          </span>
        </motion.button>
        <div
          className={`${
            activeIndex ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          } absolute top-full right-0 mt-2 transition-all duration-300 bg-background/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 z-50`}
        >
          <ul className="flex flex-col px-6 py-4 text-main text-base font-semibold space-y-3 min-w-[160px]">
            <li>
              <NavLink
                to="/"
                className="block hover:translate-x-1 transition-all duration-200 hover:text-white"
                onClick={() => handleClick(false)}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block hover:translate-x-1 transition-all duration-200 hover:text-white"
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
                className="block hover:translate-x-1 transition-all duration-200 hover:text-white"
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
