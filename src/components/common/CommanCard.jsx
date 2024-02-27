import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../CommanCard.css"

export const CommanCard = ({ imageSrc, title, description, action1Label, action2Label }) => {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: '12px', background: '' }}>
      <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={imageSrc }
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.8rem', color: 'black' }} >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div" sx={{ fontSize: '1rem', color: 'black' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{action1Label}</Button>
        <Button size="small">{action2Label}</Button>
      </CardActions>
    </Card>
  );
};



// Code for Health services by idhs Card. 

export const  ServiceCard = ({ serviceName, description, cta }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: '12px' }}>
      <CardContent>
        <Typography variant="h3" gutterBottom component="div">
          {serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {description}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        {cta}
      </Button>
    </Card>
  );
};


// HomePage Card for promotion



export const HomeServices = () => {
  const theme = useTheme();

  return (
<Card sx={{ display: 'flex', width: '85vw', margin: '0 auto', maxWidth: '1000px', background: 'linear-gradient(to right,  #00B29A, #9459BD)', borderRadius: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 3, color: 'white', textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom component="div">
         Book health services with IDHS app.
        </Typography >
        <Typography variant="h2" gutterBottom component="div">
          Choose your time for appointment
        </Typography>
        <Typography variant="h3" gutterBottom component="div">
          Get emergency services.
        </Typography>
        <Button variant="contained" color="primary" sx={{ width: '30%', marginTop: '20px' }}>
          Click me
        </Button>
      </Box>
    </Card>
  );
};