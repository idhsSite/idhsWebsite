// NavbarComponent.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <img src='LogoIDHS.png' alt='Logo' className='logo' />
        </li>
        <li onClick={() => scrollToSection("Home")}>
          <span className="list">Home</span>
        </li>
        <li onClick={() => scrollToSection("about")}>
          <span className="list">About</span>
        </li>
        <li onClick={() => scrollToSection("product")}>
          <span className="list">Product</span>
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <span className="list">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;
