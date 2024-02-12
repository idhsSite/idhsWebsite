// Contact.jsx

import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      {/* Contact Form */}
      <div className="contact-form">
        <h1>Contact Us</h1>
        {/* Your form elements go here */}
        <form>
          {/* Form fields (e.g., name, email, message) */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h2>Contact Details</h2>
        {/* Your contact details (website, phone, social accounts, email) go here */}
        <p>Website: www.example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Email: info@example.com</p>
        {/* Add more details as needed */}
      </div>

      {/* Map */}
      <div className="contact-map">
        <h2>Our Location</h2>
        {/* Your map component or integration goes here */}
        {/* Example: <iframe src="https://www.google.com/maps/embed?..." width="600" height="450" title="Our Location" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>
    </div>
  );
};

export default Contact;
