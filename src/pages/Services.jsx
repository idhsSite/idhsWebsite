import React from 'react';
import { CommanCard} from '../components/common/CommanCard';
import { Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import LoginPage from "../images/Login.png"
import HospitalLogin from "../images/HospitalLogin.png"
import './Pages.css'


function Product() {
  const ServiceList = () => {
    const services = [
      {
        imageSrc :"https://via.placeholder.com/150",
        title: 'Patient App',
        description: (
          <div>

          
          
            </div>
        
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      {
        title: 'Hospital Management Dashboard',
        description: (
          <div>
         
           
            </div>
         
        ),
        action1Label: 'Register now',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      {
        title: 'Doctors Management App',
        description: (
          <Typography variant="body2" color="text.secondary" component="div" >
            <ul>
              <li>Review: <span>4.3 *****</span></li>
              <li>Manage your hospitals/Clinics</li>
              <li>Schedule your calendar for Hospitals</li>
              <li>Manage detailed profiles and check reviews.</li>
            </ul>
          </Typography>
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      // Add more services as needed
    ];

    return (
      <div className='Comman-cart'>

     
      <CommanCard
      title="'Patient App'"
      description="hello"
      imageSrc={LoginPage}
      altText="Mission Logo"
      action2Label="Download app"
    />
    <CommanCard
      title="Hospital Management "
      description="Hi"
      imageSrc={HospitalLogin}
      altText="Mission Logo"
      action2Label="More"
    />
    <CommanCard
      title="Doctors Management App"
      description="hello"
      imageSrc={LoginPage}
      altText="Mission Logo"
      action2Label="More"
    />
     </div>
     
    );
  };

  return <ServiceList />;
}

export default Product;
