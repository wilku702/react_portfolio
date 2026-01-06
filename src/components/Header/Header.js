import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="relative h-screen flex items-center justify-center font-monoLight overflow-hidden">
      <div className="flex flex-col items-center gap-2 text-center relative z-10">
        <motion.h1
          className="typewriter-line typewriter-line-1 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          will kung
        </motion.h1>
        <motion.h1
          className="typewriter-line typewriter-line-2 text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          full stack developer
        </motion.h1>
        <motion.h1
          className="typewriter-line typewriter-line-3 gradient-text-main text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          backend focused, ai developer
        </motion.h1>
      </div>
      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      />
    </div>
  );
};

export default Header;
