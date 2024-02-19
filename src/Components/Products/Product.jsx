// Product.js

import React from 'react';

import FAQ from '../FAQ/FAQ';
import { CommanCart} from '../Common/CommanCart';
import '../Common/Comman.css'
import CardActions from '@mui/material/CardActions';
import InteractionForm from '../UseForms/InteractionForm'
import Blogs from '../Blogs/Blogs';
function Product() {
  const ServiceList = () => {
    const services = [
      {
        title: 'User App',
        description: (
          <ul>
            <li>Book appointments through the mobile app.

</li>
            <li>Check and book emergency services near your location.</li>
            <li>Choose customized treatment packages for your diseases.</li>
          </ul>
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More', // Add an additional action if needed
        imageSrc: 'path/to/doctors-management-app-image.jpg', // Provide the correct image source
      },
      {
        title: 'Hospital Management Dashboard',
        description: (
          <ul>
            <li>Manage accept/reject/reschedule appointments through the mobile app.

</li>
            <li>Manage hospital's doctors, staff, and facilities within a hospital/clinic.</li>
            <li>Create your own customized treatment package.</li>
          </ul>
        ),
        action1Label: 'Register now',
        action2Label: 'Learn More', // Add an additional action if needed
        imageSrc: 'path/to/doctors-management-app-image.jpg', // Provide the correct image source
      },
      {
        title: 'Doctors Management App',
        description: (
          <ul>
            <li>Manage your hospitals/Clinics</li>
            <li>Schedule your calendar for Hospitals</li>
            <li>Manage detailed profiles and check reviews.</li>
          </ul>
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More', // Add an additional action if needed
        imageSrc: 'path/to/doctors-management-app-image.jpg', // Provide the correct image source
      },
     
      
      // Add more services as needed
    ]; // Closing parenthesis was missing here

    const faqData = [
      { question: 'Who we are?', answer: 'We are Healthtech startup. currently we are operating in Bihar major districts like.....' },
      { question: 'What services does your health startup provide?', answer: '...' },
      { question: 'How schedule a appointment work?', answer: '...' },
      { question: 'What services does your health startup provide?', answer: '...' },
      { question: 'How can I schedule a telemedicine appointment?', answer: '...' },
      { question: 'How can I schedule a telemedicine appointment?', answer: '...' },
      // Add more FAQ items as needed
    ];

    return (
      <>
      <div id='product'>
        <header>
          <h1>Healthcare Services by IDHS</h1>
        </header>
        <div className='Comman-cart'>
          {services.map((service, index) => (
            <CommanCart
              key={index}
              title={service.title}
            description={service.description}
            action1Label={service.action1Label}
            action2Label={service.action2Label}
           
            />
          ))}
        </div>
    
      </div>
      <div className="FAQ-Form">
       <FAQ faqData={faqData}/>
       <Blogs/>
       <InteractionForm/>
       </div>
       </>
    );
  };

  return <ServiceList />;
}

export default Product;
