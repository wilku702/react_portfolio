import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  const skipAnimation = sessionStorage.getItem('hero_animated') === 'true';

  useEffect(() => {
    if (!skipAnimation) {
      sessionStorage.setItem('hero_animated', 'true');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="header">
      <div className={`typewriter-animation ${skipAnimation ? 'skip-animation' : ''}`}>
        <h1>will kung</h1>
        <h1>full stack developer</h1>
        <p className="intro-text">Computer Science @ UT Austin. Backend specialist building scalable systems, shipping automation that doesn't break, and exploring AI reliability.</p>
      </div>
      <div className="scroll-down"></div>
    </div>
  );
};

export default Header;
