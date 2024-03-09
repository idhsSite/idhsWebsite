import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginRight: '16px' }}> {/* Adjust marginRight as per your theme's spacing */}
          <Button color="inherit" sx={{ mx: 1 }} href='http://50.18.119.35/idhs/hospital/login' target='blank'>Register as Hospital</Button>
          <Button color="inherit" href="/launching-soon">Download Patient App</Button>
        </Box>
      </Box>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
            IDHS : Indian Digital Health Solutions
          </Typography>
          {isSmallScreen ? (
            <>
              <IconButton color="inherit" aria-label="menu"  onClick={handleDrawerOpen} >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose} sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: theme.palette.primary.main, // Change the drawer background color
                    color: theme.palette.primary.contrastText, // Change the text color inside the drawer
                  },
                }}>
                <List>
                  {menuItems.map((item) => (
                    <ListItem Button key={item.name} onClick={() => {navigate(item.path); handleDrawerClose();}}>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button key={item.name} color="inherit" component={NavLink} to={item.path}>{item.name}</Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
