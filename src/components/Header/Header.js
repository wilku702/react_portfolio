import React from 'react';

const Header = () => {
  return (
    <div className="relative h-screen flex items-center justify-center font-monoLight">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="typewriter-line typewriter-line-1 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          will kung
        </h1>
        <h1 className="typewriter-line typewriter-line-2 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          full stack developer
        </h1>
        <h1 className="typewriter-line typewriter-line-3 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          react specialist, ai enthusiast
        </h1>
      </div>
      <div className="scroll-down"></div>
    </div>
  );
};

export default Header;
