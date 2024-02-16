// Product.js

import React from 'react';
import './Product.css'; // Import your CSS file
import FAQ from '../FAQ/FAQ';

function Product() {

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
    <div id='product'>
      <header>
        <h1>Healthcare Services by IDHS</h1>
      </header>
      <section>
        <h2>Services offered by us</h2>
        <div className="services-container">
          <article>
            <h3>User App</h3>
            <div className="article-content">
              <ul>
                <li>Book appointments through the mobile app.</li>
                <li>Check and book emergency services near your location.</li>
                <li>Choose customized treatment packages for your diseases.</li>
              </ul>
              <button className="download-button" aria-label="Download User App">
                Download App
              </button>
            </div>
          </article>
          <article>
            <h3>Hospital Management</h3>
            <div className="article-content">
              <ul>
                <li>Manage accept/reject/reschedule appointments through the mobile app.</li>
                <li>Manage hospital's doctors, staff, and facilities within a hospital/clinic.</li>
                <li>Create your own customized treatment package.</li>
              </ul>
              <a href='http://50.18.119.35/idhs/hospital/login'><button className="download-button" aria-label="Download Hospital Management App">
                Register Now
              </button>
              </a>
            </div>
          </article>
          <article>
            <h3>Doctors Management App</h3>
            <div className="article-content">
              <ul>
                <li>Manage you hospitals/Clinics</li>
                <li>Schedule your calender for Hospitls</li>
                <li>Manage detailed profiles and check reviews.</li>
              </ul>
              <button className="download-button" aria-label="Download Doctors App">
                Download App
              </button>
            </div>
          </article>
          
        </div>
      </section>
      <FAQ faqData={faqData}/>
    </div>
  );
}

export default Product;
