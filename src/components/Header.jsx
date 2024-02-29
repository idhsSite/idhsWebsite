import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './common/NavMenu'; // Adjust the import path as needed

const Header = () => {
  return (
    <Box  sx={{ flexGrow: 1 }}>

    
    <Box >
      {/* Top header with content aligned to the right within the max container width */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '16px' }}> {/* Adjust marginRight as per your theme's spacing */}
          <Button color="inherit" sx={{ mx: 1 }} href="/register-hospital">Register as Hospital</Button>
          <Button color="inherit" href="/download-app">Download App</Button>
        </Box>
      </Box>
      
      {/* Main Navigation Bar */}
     
    </Box>
     <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            IDHS
          </Typography>
          <NavMenu />
          <Button color="inherit" aria-label="menu" startIcon={<MenuIcon />}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>
      </Box>
  );
};

export default Header;
