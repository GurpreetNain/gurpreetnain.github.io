import React from 'react';
import './Navbar.scss';

const Navbar = ({ toggleTheme, isLightMode }) => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {isLightMode ? (
              <img src={'moon.svg'} alt="Dark Mode" />
            ) : (
              <img src={'sun.svg'} alt="Light Mode" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 