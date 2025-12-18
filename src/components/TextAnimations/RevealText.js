import React from 'react';
import { motion } from 'framer-motion';

/**
 * Letter-by-letter reveal animation
 */
export const RevealText = ({ text, delay = 0, className = '' }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: '0.25em' }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span key={charIndex} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * Gradient text with hover shift
 */
export const GradientText = ({ children, className = '', animated = false }) => {
  return (
    <motion.span
      className={`${animated ? 'gradient-text-animated' : 'gradient-text-main'} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
};

/**
 * Text with animated underline
 */
export const UnderlineText = ({ children, className = '' }) => {
  return (
    <span className={`animated-underline ${className}`}>
      {children}
    </span>
  );
};

/**
 * Counting number animation
 */
export const CountingNumber = ({ end, duration = 2, suffix = '', prefix = '', className = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};
