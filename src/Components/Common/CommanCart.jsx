import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const CommanCart = ({ imageSrc, title, description, action1Label, action2Label }) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={imageSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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

export const ServiceCart = ({ serviceName, description, cta }) => {
  return (
    <div className="service-cart">
      <div className="service-header">
        <h3>{serviceName}</h3>
      
      </div>
      <p className="description">{description}</p>
      <button className="add-to-cart-btn">CTA</button>
    </div>
  );
};

