import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <header>
      <nav id="desktop-nav">
        <Link to="/" className="logo">Gigi Kuffa</Link>
        <ul className="nav-links">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#stack" onClick={handleLinkClick}>Background</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Gigi Kuffa</div>
        <div className="hamburger-menu">
        <div 
          className={`hamburger-icon ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
        >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#stack" onClick={handleLinkClick}>Background</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;