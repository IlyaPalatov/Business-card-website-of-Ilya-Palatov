import React, { useState } from 'react';
import '../styles/BurgerMenuStyles.css';

const BurgerMenu = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleContactClick = () => {
    closeMenu();
    onContactClick();
  };

  return (
    <>
      <div
        className={`burger-icon ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </div>
        <div className="mobile-menu-btn">
          <button
            className="btn-contact-me-mobile"
            onClick={handleContactClick}
          >
            Let's talk
          </button>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
