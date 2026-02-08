import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  const skipAnimation = sessionStorage.getItem('hero_animated') === 'true';

  useEffect(() => {
    if (!skipAnimation) {
      sessionStorage.setItem('hero_animated', 'true');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className={`typewriter-animation ${skipAnimation ? 'skip-animation' : ''}`}>
        <h1>will kung</h1>
        <h1>full stack developer</h1>
        <h1>react specialist, ai enthusiast</h1>
      </div>
      <a href="#work" className={`hero-cta ${skipAnimation ? 'skip-animation' : ''}`} onClick={handleScrollToWork}>View My Work</a>
      <div className="scroll-down"></div>
    </div>
  );
};

export default Header;
