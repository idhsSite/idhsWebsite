import React, { useState } from 'react'; 
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Testimonial from "../components/Testimonial";
import PatientApp from "../assets/images/Patient-app.png"; // Ensure the path is correct
import HospitalManagement from "../assets/images/Hospital-management.png"; // Ensure the path is correct
import { useShowMore } from "../context/ShowMore"

// Updated mock data for services card
const servicesData = [
  {
    title: 'Patient app',
    description: 'Our Telemedicine Solutions extend beyond traditional care, offering real-time consultations, digital prescriptions, and a comprehensive patient portal for unparalleled access to healthcare services.',
    features1: 'hello hello',
    features2: 'hello hello',
    features3: 'hello hello',
    features4: 'hello hello',

    imageUrl: PatientApp,
    altText: 'Telemedicine consultation happening over a computer',
    ctaUrl: '/telemedicine',
    statistics: 'Serving over 50,000 patients nationwide with a 95% satisfaction rate.',
    action: 'Download app'
  },
  {
    title: 'Hospital Management System',
    description: 'Our Hospital Management System revolutionizes hospital operations with AI-driven data analytics, patient management, and administrative automation, setting new standards for healthcare efficiency.',
    features1: 'hello hello',
    features2: 'hello hello',
    features3: 'hello hello',
    features4: 'hello hello',

    imageUrl: HospitalManagement,
    altText: 'Digital hospital management system interface',
    ctaUrl: '/hospital-management',
    statistics: 'Implemented in 100+ hospitals, reducing operational costs by 30%.',
    action: 'Register now'
  },
  {
    title: 'Doctor Appointment App',
    description: 'The Doctor Appointment App simplifies healthcare management for both providers and patients, featuring intuitive appointment booking, telehealth options, and a secure messaging platform.',
    features1: 'hello hello',
    features2: 'hello hello',
    features3: 'hello hello',
    features4: 'hello hello',

    imageUrl: PatientApp,
    altText: 'Doctor scheduling an appointment using the app',
    ctaUrl: '/doctor-app',
    statistics: 'Over 10,000 doctors connected, facilitating 200,000+ appointments yearly.',
    action: 'Download app'
    
  },
];


// State to track which service's details are shown




// Services 


const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { expandedSections, toggleExpanded } = useShowMore();



  return (
    <Box id="services" sx={{ flexGrow: 1, py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 5 }}>
        Explore IDHS Services
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => {
          const serviceKey = `service${index}`; // Construct a unique key for each service
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ display: 'flex', flexDirection: 'column', minHeight: 'auto' }}>
                <CardMedia
                  component="img"
                  image={service.imageUrl}
                  alt={service.altText}
                  sx={{ height: 'auto',width: '100%', maxHeight: isSmallScreen ? 200 : 300 }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.features1}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.features2}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.features3}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {service.features4}
                  </Typography>
                  {expandedSections[serviceKey] && (
                    <>
                      <Typography variant="body1" paragraph>
                        {service.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Statistics: {service.statistics}
                      </Typography>
                    </>
                  )}
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="contained" color="primary" component={Link} to={service.ctaUrl} sx={{ width: '48%' }}>
                    {service.action}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ width: '48%' }}
                    onClick={() => toggleExpanded(serviceKey)} // Ensure this toggles only the clicked service
                  >
                    See More
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;