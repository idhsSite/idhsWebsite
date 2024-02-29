import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Testimonial from "../components/Testimonial";
import PatientApp from "../assets/images/Patient-app.png"; // Ensure the path is correct
import HospitalManagement from "../assets/images/Hospital-management.png"; // Ensure the path is correct


// Updated mock data for services card
const servicesData = [
  {
    title: 'Patient app',
    description: 'Our Telemedicine Solutions extend beyond traditional care, offering real-time consultations, digital prescriptions, and a comprehensive patient portal for unparalleled access to healthcare services.',
    features: 'Features include 24/7 access to doctors, prescription renewal, and health monitoring.',
    imageUrl: PatientApp,
    altText: 'Telemedicine consultation happening over a computer',
    ctaUrl: '/telemedicine',
    statistics: 'Serving over 50,000 patients nationwide with a 95% satisfaction rate.',
    action: 'Download app'
  },
  {
    title: 'Hospital Management System',
    description: 'Our Hospital Management System revolutionizes hospital operations with AI-driven data analytics, patient management, and administrative automation, setting new standards for healthcare efficiency.',
    features: 'Automated scheduling, electronic health records, and inventory management.',
    imageUrl: HospitalManagement,
    altText: 'Digital hospital management system interface',
    ctaUrl: '/hospital-management',
    statistics: 'Implemented in 100+ hospitals, reducing operational costs by 30%.',
    action: 'Register now'
  },
  {
    title: 'Doctor Appointment App',
    description: 'The Doctor Appointment App simplifies healthcare management for both providers and patients, featuring intuitive appointment booking, telehealth options, and a secure messaging platform.',
    features: 'Easy booking, telehealth integration, and secure patient-provider communication.',
    imageUrl: PatientApp,
    altText: 'Doctor scheduling an appointment using the app',
    ctaUrl: '/doctor-app',
    statistics: 'Over 10,000 doctors connected, facilitating 200,000+ appointments yearly.',
    action: 'Download app'
    
  },
];



// Services 


const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="services" sx={{ flexGrow: 1, py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 5 }}>
        Explore IDHS Services
      </Typography>
      <Grid container spacing={4}> {/* Increased spacing between grid items */}
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                image={service.imageUrl}
                alt={service.altText}
                sx={{ height: 'auto', width: '100%', maxHeight: isSmallScreen ? 200 : 300 }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}> {/* Increased padding inside CardContent */}
                <Typography gutterBottom variant="h5" component="h3">
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {service.description}
                </Typography>
                {/* Additional content */}
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" color="primary" component={Link} to={service.ctaUrl} fullWidth>
                  {service.action}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={8}> {/* Adjust this value based on desired spacing */}
        <Testimonial />
      </Box>
     
    </Box>
  );
};

export default Services;