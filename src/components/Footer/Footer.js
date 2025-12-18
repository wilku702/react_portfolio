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
              className="text-main hover:underline"
            >
              wkung2004@gmail.com
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
                  className="text-main hover:underline"
                >
                  {link.platform}
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
              className="text-main hover:underline"
            >
              github
            </a>
          </h4>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
