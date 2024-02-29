import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder'; // For representing awards or recognition

const achievements = [
  {
    title: 'Best Healthcare Tech',
    description: 'Awarded for outstanding innovation in healthcare technology, 2023.',
    icon: <StarBorderIcon />,
  },
  {
    title: '1M+ Satisfied Users',
    description: 'Over a million users trust our solutions for their healthcare needs.',
    icon: <StarBorderIcon />,
  },
  {
    title: '500+ Partner Hospitals',
    description: 'Partnered with over 500 hospitals worldwide to streamline healthcare services.',
    icon: <StarBorderIcon />,
  },
  // Add more achievements as needed
];

const Achievements = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Achievements
      </Typography>
      <Grid container spacing={4}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 60 }}>{achievement.icon}</Box>
                <Typography variant="h6" component="h3">{achievement.title}</Typography>
                <Typography variant="body1">{achievement.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
