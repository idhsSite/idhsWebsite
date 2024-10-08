/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PatientApp from "../assets/images/Patient-app.png"; // Ensure the path is correct
import DoctorApp from "../assets/images/Doctor-homepage.png";
import HospitalManagement from "../assets/images/Hospital-management.png"; // Ensure the path is correct
import { useShowMore } from "../context/ShowMore";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Updated mock data for services card
const servicesData = [
  {
    title: 'IDHS Patient app',
    description: 'IDHS provide a wide range of solutions for your health issues. 1: Book appointment to Doctors/Hospitals  2: Book emergency services  3: Choose your customise treatment plan.',
    features1: 'Compare and   Book health services',
    features2: 'Get emergency services',
    features3: 'Choose customise treatment plans',
    imageUrl: PatientApp,
    altText: 'Telemedicine consultation happening over a computer',
    ctaUrl: "/idhs-app",
    statistics: 'Launching soon!',
    Subscription: 'Free OPD Booking',
    action: 'Download app'
  },
  {
    title: 'IDHS HMS',
    description: 'Our Hospital Management System revolutionizes hospital operations with package management, data analytics, Booking management, and administrative management, setting new standards for healthcare efficiency.',
    features1: 'Manage your health services',
    features2: 'Get listed on IDHS user app',
    features3: 'Accept booking',
    imageUrl: HospitalManagement,
    altText: 'Digital hospital management system interface',
    ctaUrl: 'http://account.idhs.in',
    statistics: 'Implemented in 100+ hospitals, increasing efficiency in daily operation and increase in patients per month.',
    Subscription: '4999 for 3 months , 8999 for 6 months , 14999 for 12 months',
    action: 'Register now'
  },

];

const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { expandedSections, toggleExpanded } = useShowMore();

  return (
    <Box id="services" sx={{ flexGrow: 1, py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 5 }}>
        Explore our Services
      </Typography>
      <Grid container spacing={4} justifyContent={"center"}>
        {servicesData.map((service, index) => {
          const serviceKey = `service${index}`; // Construct a unique key for each service
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card raised sx={{ display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h2" component="h3" sx={{ height: '50px' }}>
                    {service.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={service.imageUrl}
                    alt={service.altText}
                    sx={{ height: '200px', width: '100%', objectFit: 'contain' }}
                  />
                  <Typography color="textSecondary" gutterBottom variant="h4" component="h4" paragraph sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <StarPurple500Icon sx={{ color: theme.palette.secondary.main }} />
                    {service.features1}
                  </Typography>
                  <Typography gutterBottom variant="h4" component="h4" paragraph color="textSecondary" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LocalHospitalIcon sx={{ color: theme.palette.secondary.main }} />
                    {service.features2}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="h4" component="h4" paragraph sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <DateRangeIcon sx={{ color: theme.palette.secondary.main }} />
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
                      <Typography variant="body2" color="textSecondary" sx={{ mt:2 }}>
                        Subscription: {service.Subscription}
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
