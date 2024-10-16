import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#stack">Background</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Made with <span style={{ color: "red" }}>♥</span> by Gigi Kuffa.</p>
    </footer>
  );
};

export default Footer;