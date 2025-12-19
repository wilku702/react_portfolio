import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="relative h-screen flex items-center justify-center font-monoLight overflow-hidden">
      {/* Animated gradient background orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-main/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

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
          react specialist, ai enthusiast
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
