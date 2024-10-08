import React from 'react';
import { Typography, Button, Box, IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Contact from '../../pages/Contact';

function DownloadApp() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start', // Adjusted for better alignment with the included Contact component
        height: 'auto', // Take full height of the viewport
        // overflow: 'auto', // Make the Box scrollable
        p: 4, // Padding
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom color="primary" align="center">Download App</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={1} alignItems="center">
          <IconButton
            href="https://play.google.com/store/apps/details?id=com.idhs.patient"
            aria-label='Google Play'
            target="_blank"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Play" style={{ height: '30px' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom color="primary" align="center">
            Google Play
          </Typography>
        </Stack>
        <Stack spacing={1} alignItems="center"  sx={{ my: 3, mx: 3 }}>
          <IconButton
            href="https://apps.apple.com/in/app/idhs-health-wellness/id6544813148"
            aria-label='Apple Store'
            target="_blank"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="App Store" style={{ height: '30px' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom color="primary" align="center">
            App Store
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ width: '100%', maxWidth: '700px', mb: 4 }}>
        <Contact /> {/* Contact component included directly */}
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back to Home
      </Button>
    </Box>
  );
}

export default DownloadApp;
