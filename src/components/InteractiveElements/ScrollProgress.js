import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Scroll progress indicator that fills as you scroll
 */
export const ScrollProgress = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-main origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
};

/**
 * Circular scroll progress indicator
 */
export const CircularScrollProgress = ({ size = 60, strokeWidth = 4, className = '' }) => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <div className={`fixed bottom-8 right-8 ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(148, 174, 247, 0.2)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgb(148, 174, 247)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{
            pathLength,
            rotate: -90,
            transformOrigin: 'center'
          }}
        />
      </svg>
    </div>
  );
};

/**
 * Section scroll indicator with color coding
 */
export const SectionScrollIndicator = ({ sections = [], className = '' }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 ${className}`}>
      {sections.map((section, index) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className="group relative"
          whileHover={{ scale: 1.5 }}
        >
          <motion.div
            className="w-3 h-3 rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: section.color || 'rgb(148, 174, 247)',
              backgroundColor: 'transparent'
            }}
            whileInView={{
              backgroundColor: section.color || 'rgb(148, 174, 247)'
            }}
            viewport={{ margin: '-50%' }}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm bg-background/80 px-2 py-1 rounded transition-opacity">
            {section.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};
