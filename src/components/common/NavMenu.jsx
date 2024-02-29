import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavMenu = () => {
  return (
    <>
    <Button color="inherit" component={NavLink} to="/">Home</Button>
      <Button color="inherit" component={NavLink} to="/about">About</Button>
      <Button color="inherit" component={NavLink} to="/services">Services</Button>
      <Button color="inherit" component={NavLink} to="/contact">Contact</Button>
    </>
  );
};

export default NavMenu;
