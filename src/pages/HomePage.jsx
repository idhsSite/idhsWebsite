import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import HeroImage from '../assets/images/ero-container-imag.png'; // Ensure you have a hero image in your assets folder
import Services from "../pages/Services"
import About from './About';
import Contact from './Contact';
import {ShowMoreProvider} from "../context/ShowMore"

// Mock data for services, replace with real data
const services = [
  { title: 'Telemedicine', description: 'Connect with doctors remotely.', image: '/path/to/image1.jpg' },
  { title: 'E-Prescriptions', description: 'Get prescriptions digitally.', image: '/path/to/image2.jpg' },
  { title: 'Health Records', description: 'Access your health records online.', image: '/path/to/image3.jpg' },
];

const HomePage = () => {
  return (
    <ShowMoreProvider>

    

      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Making health services accessible
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Book your appointment.
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Book emergency services.
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Choose your customise treatment plan.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Download app
        </Button>
      </Box>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Services/>
        <About/>
      </Container>
      <Contact/>
      </ShowMoreProvider>
      
  
  );
};

export default HomePage;
