import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

/**
 * Card with lift effect on hover
 */
export const LiftCard = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * 3D Tilt card with parallax effect
 */
export const TiltCard = ({ children, className = '' }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={2000}
      gyroscope={true}
      className={className}
    >
      {children}
    </Tilt>
  );
};

/**
 * Card with gradient border that follows cursor
 */
export const GradientBorderCard = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      className={`relative p-[2px] rounded-xl overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(148, 174, 247, 0.4), transparent 40%)`
      }}
    >
      <div className="relative bg-background rounded-xl h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * Glassmorphism card
 */
export const GlassCard = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * Expanding card with smooth layout shift
 */
export const ExpandableCard = ({ title, preview, details, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`glass-card-dark p-6 rounded-2xl cursor-pointer ${className}`}
      whileHover={{ scale: 1.01 }}
    >
      <motion.h3 layout="position" className="text-2xl font-bold mb-2">
        {title}
      </motion.h3>
      <motion.p layout="position" className="text-white/80">
        {preview}
      </motion.p>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {details}
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * Card with image zoom on hover
 */
export const ImageZoomCard = ({ imageSrc, title, description, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`overflow-hidden rounded-2xl ${className}`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={imageSrc}
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6 bg-background/80">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};
