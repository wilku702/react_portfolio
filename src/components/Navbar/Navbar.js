import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navigation-wrapper">
      <NavLink to="/">
        <img
          className="navigation-logo"
          src="./logo/logowhite.png"
          alt="Site Icon"
        />
      </NavLink>
      <ul className="navigation-menu">
        <li>
          <NavLink to="/about" className="bar-link">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="bar-link">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="bar-link">
            experience
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
