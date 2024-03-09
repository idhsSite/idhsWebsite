import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Contact from '../../pages/Contact';

function Launching() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start', // Adjusted for better alignment with the included Contact component
        height: '100vh', // Take full height of the viewport
        overflow: 'auto', // Make the Box scrollable
        p: 4, // Padding
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Launching Soon
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We are working hard to bring you an amazing experience to access healtcare services. join pre-event for the launch of patient app.
      </Typography>
      <Box sx={{ width: '100%', maxWidth: '600px', mb: 4 }}>
        <Contact /> {/* Contact component included directly */}
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back to Home
      </Button>
    </Box>
  );
}

export default Launching;
