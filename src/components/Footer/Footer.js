import React from 'react';

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
      className="flex flex-col bg-background pt-16 pb-10 px-6 md:px-16"
    >
      <div className="w-full border-t border-white/30" />
      <div className="flex flex-wrap justify-between text-center md:text-left gap-10 mt-8">
        <motion.div variants={bannerFadeInUpVariants} className="space-y-2">
          <h4 className="text-lg text-white/80 uppercase tracking-wide">
            reach out to me <br /> through email
          </h4>
          <h4 className="text-xl">
            <a
              href="mailto:wkung2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-main inline-block transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">wkung2004@gmail.com</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </h4>
        </motion.div>
        <motion.div variants={bannerFadeInUpVariants} className="space-y-2">
          <h4 className="text-lg text-white/80 uppercase tracking-wide">
            <br /> let's connect
          </h4>
          <ul className="flex flex-row gap-8 justify-center md:justify-start text-xl">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-main inline-block transition-all duration-300 hover:text-white hover:scale-110"
                >
                  <span className="relative z-10">{link.platform}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={bannerFadeInUpVariants} className="space-y-2">
          <h4 className="text-lg text-white/80 uppercase tracking-wide">
            <br /> my codespace
          </h4>
          <h4 className="text-xl">
            <a
              href="https://github.com/wilku702"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-main inline-block transition-all duration-300 hover:text-white hover:scale-110"
            >
              <span className="relative z-10">github</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </h4>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
