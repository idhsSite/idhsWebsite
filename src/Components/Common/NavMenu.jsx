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
        <Link to="/homepage" className="list">Home</Link>
          
        </li>
        <li onClick={() => scrollToSection("about")}>
        <Link to="/about" className="list">About</Link>
        </li>
        <li onClick={() => scrollToSection("product")}>
        <Link to="/product" className="list">Product</Link>

          <span className="list"></span>
        </li>
        <li onClick={() => scrollToSection("contact")}>
        <Link to="/contact" className="list">Contact</Link>

         
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;
