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
          <Link to="/homepage" class="list" >
            Home
          </Link>
        </li>
        <li onClick={() => { handleClickScroll("about") }}>
        <Link to="/about" class="list">
          about
        </Link>
        </li>

        
        <Link to="/product" class="list">
          Product
        </Link>
        <li onClick={() => { handleClickScroll("contact") }}>
        <Link to="/contact" class="list">
          Contact
        </Link>
        </li>
     
      </ul>


    </div>
  );
};

export default NavbarComponent;