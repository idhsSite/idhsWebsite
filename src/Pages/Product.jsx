// Product.js

import React from 'react';
import { CommanCart} from '../Components/Common/CommanCart';
import '../Pages/Pages.css'


function Product() {
  const ServiceList = () => {
    const services = [
      {
        title: 'User App',
        description: (
          <ul>
            <li>Review: <span>4.3 *****</span></li>
            <li>Book appointments through the mobile app.</li>
            <li>Check and book emergency services near your location.</li>
            <li>Choose customized treatment packages for your diseases.</li>
          </ul>
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      {
        title: 'Hospital Management Dashboard',
        description: (
          <ul>
            <li>Review: <span>4.3 *****</span></li>
            <li>Manage accept/reject/reschedule appointments through the mobile app.</li>
            <li>Manage hospital's doctors, staff, and facilities within a hospital/clinic.</li>
            <li>Create your own customized treatment package.</li>
          </ul>
        ),
        action1Label: 'Register now',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      {
        title: 'Doctors Management App',
        description: (
          <ul>
            <li>Review: <span>4.3 *****</span></li>
            <li>Manage your hospitals/Clinics</li>
            <li>Schedule your calendar for Hospitals</li>
            <li>Manage detailed profiles and check reviews.</li>
          </ul>
        ),
        action1Label: 'Download App',
        action2Label: 'Learn More',
        imageSrc: 'path/to/doctors-management-app-image.jpg',
      },
      // Add more services as needed
    ];

   

    return (
      <div>
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
       
      </div>
    );
  };

  return <ServiceList />;
}

export default Product;
