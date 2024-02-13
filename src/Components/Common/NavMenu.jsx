import React, { useState } from 'react';
import './NavMenu.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useNavigate  } from 'react-router-dom';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate  = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
    setIsMenuOpen(false);
  };
  const handleNavLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <div>
    <div className="menu-toggle" onClick={handleMenuToggle}>
      ☰
    </div>
    <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
     

      <ScrollLink to="Home" spy={true} smooth={true} duration={500} className="list">
        <li onClick={scrollToTop}>Home</li>
      </ScrollLink>

      <ScrollLink to="about" spy={true} smooth={true} duration={500} className="list">
        <li onClick={() => handleNavLinkClick('/about')}>About</li>
      </ScrollLink>

      <ScrollLink to="product" spy={true} smooth={true} duration={500} className="list">
        <li onClick={() => handleNavLinkClick('/product')}>Product</li>
      </ScrollLink>

      <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="list">
        <li onClick={() => handleNavLinkClick('/contact')}>Contact</li>
      </ScrollLink>
    </ul>
  </div>
  )
};

export default NavbarComponent;
