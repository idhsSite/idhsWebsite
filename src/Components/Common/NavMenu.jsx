import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import HomePage from '../Home/HomePage';

const NavbarComponent = () => {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <ul>
        <li>
          <img src='LogoIDHS.png' alt='Logo' className='logo' />
        </li>
        <li onClick={() => { handleClickScroll("Home") }}>
          <Link to="/homepage" className="list" >
            Home
          </Link>
        </li>
        <li onClick={() => { handleClickScroll("about") }}>
        <Link to="/about" className="list">
          About
        </Link>
        </li>
        <li onClick={() => { handleClickScroll("product") }}>
        <Link to="/product" className="list">
          Product
        </Link>
        </li>
        <li onClick={() => { handleClickScroll("contact") }}>
        <Link to="/contact" className="list">
          Contact
        </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarComponent;