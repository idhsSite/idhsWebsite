// Product.js

import React from 'react';
import './Product.css'; // Import your CSS file

function Product() {
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
              <button className="download-button" aria-label="Download Hospital Management App">
                Register Now
              </button>
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
    </div>
  );
}

export default Product;
