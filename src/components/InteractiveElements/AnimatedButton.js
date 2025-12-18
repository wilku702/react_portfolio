import React from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic button with spring animation
 */
export const MagneticButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium ${className}`}
    >
      {children}
    </motion.button>
  );
};

/**
 * Glass button with hover effects
 */
export const GlassButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass-button px-6 py-3 rounded-lg font-medium ${className}`}
    >
      {children}
    </motion.button>
  );
};

/**
 * Neumorphic button
 */
export const NeuroButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`neuro-button px-6 py-3 font-medium ${className}`}
    >
      {children}
    </motion.button>
  );
};

/**
 * Shimmer button effect
 */
export const ShimmerButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden bg-main text-background px-6 py-3 rounded-lg font-medium ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.button>
  );
};
