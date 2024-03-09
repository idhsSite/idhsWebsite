import React, { useState } from 'react'; 
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PatientApp from "../assets/images/Patient-app.png"; // Ensure the path is correct
import HospitalManagement from "../assets/images/Hospital-management.png"; // Ensure the path is correct
import { useShowMore } from "../context/ShowMore"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Updated mock data for services card
const servicesData = [
  {
    title: 'Patient app',
    description: 'IDHS provide a wide range of solutions for your health issues. 1: Book appointment to Doctors/Hospitals  2: Book emergency services  3: Choose your customise treatment plan.',
    features1: 'Compare and   Book health services',
    features2: 'Get emergency services',
    features3: 'Choose customise treatment plans',
    

    imageUrl: PatientApp,
    altText: 'Telemedicine consultation happening over a computer',
    ctaUrl: "/launching-soon",
    statistics: 'Launching soon!',
    action: 'Download app'
  },
  {
    title: 'Hospital Management System',
    description: 'Our Hospital Management System revolutionizes hospital operations with package management, data analytics, Booking management, and administrative management, setting new standards for healthcare efficiency.',
    features1: 'Manage your health services',
    features2: 'Get listed on IDHS user app',

    features3: 'Accept booking',

    imageUrl: HospitalManagement,
    altText: 'Digital hospital management system interface',
    ctaUrl: 'http://50.18.119.35/idhs/hospital/login',
    statistics: 'Implemented in 100+ hospitals, increasing efficency in daily operation and increase in patients per month.',
    action: 'Register now'
  },
  {
    title: `Doctor's App`,
    description: 'The Doctor Appointment App simplifies healthcare management for doctors. 1: Clinic practice management 2: Featuring intuitive calender management  3: Booking management.',

    features1: 'Manage your profile and calendar',
    features2: 'Get listed on IDHS user app',

    features3: 'Accept booking',

    imageUrl: PatientApp,
    altText: 'Doctor scheduling an appointment using the app',
    ctaUrl: "/launching-soon",
    statistics: 'Launching soon!',
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
        Explore our Services
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => {
          const serviceKey = `service${index}`; // Construct a unique key for each service
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ display: 'flex', flexDirection: 'column', minHeight: 'auto' }}>
               
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h2" component="h3">
                    {service.title}
                  </Typography>
                  <CardMedia
                  component="img"
                  image={service.imageUrl}
                  alt={service.altText}
                  sx={{ height: 'auto',width: '100%', maxHeight: isSmallScreen ? 200 : 300 }}
                />
                 
                  <Typography color="textSecondary"gutterBottom variant="h4" component="h4" paragraph >
                  <StarPurple500Icon sx={{ color: theme.palette.secondary.main }}/>
                    {service.features1}
                  </Typography>
                  <Typography gutterBottom variant="h4" component="h4" paragraph color="textSecondary">
                  <LocalHospitalIcon sx={{ color: theme.palette.secondary.main }}/>
                    
                    {service.features2}
                  </Typography>
                  <Typography  color="textSecondary" gutterBottom variant="h4" component="h4" paragraph>
                  <DateRangeIcon sx={{ color: theme.palette.secondary.main }}/>
                    
                    {service.features3}
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
                  <Button variant="contained" color="primary" component={Link} to={service.ctaUrl} target="_blank" sx={{ width: '48%' }}>
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