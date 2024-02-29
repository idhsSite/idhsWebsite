import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Dr. Jane Foster',
    position: 'Cardiologist at MedCare Hospital',
    avatar: '/path-to-avatar/jane-foster.jpg', // Placeholder path
    testimonial: 'Using HealthTech’s solutions, our patient engagement has doubled, significantly improving our care delivery and patient satisfaction.',
  },
  {
    name: 'Emily Clark',
    position: 'Satisfied Patient',
    avatar: '/path-to-avatar/emily-clark.jpg',
    testimonial: 'The patient app made my medical records accessible in a few taps, and booking appointments has never been easier.',
  },
  {
    name: 'Emily Clark',
    position: 'Satisfied Patient',
    avatar: '/path-to-avatar/emily-clark.jpg',
    testimonial: 'The patient app made my medical records accessible in a few taps, and booking appointments has never been easier.',
  },
  {
    name: 'Emily Clark',
    position: 'Satisfied Patient',
    avatar: '/path-to-avatar/emily-clark.jpg',
    testimonial: 'The patient app made my medical records accessible in a few taps, and booking appointments has never been easier.',
  },
  {
    name: 'Emily Clark',
    position: 'Satisfied Patient',
    avatar: '/path-to-avatar/emily-clark.jpg',
    testimonial: 'The patient app made my medical records accessible in a few taps, and booking appointments has never been easier.',
  }
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom align="center">
        What People Are Saying
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 56, height: 56 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{testimonial.position}</Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                "{testimonial.testimonial}"
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;


