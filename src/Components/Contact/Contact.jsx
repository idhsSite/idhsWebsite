// Contact.jsx

import React from 'react';
import './Contact.css';
import Facebook from '../../Images/Facebook.png'
import Instagram from '../../Images/instagram.png'
import LinkdIn from '../../Images/linkedin.png'


const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact us</h1>
      {/* Contact Form */}
      <div className="contact-container">

        <div className="contact-form">

          {/* Your form elements go here */}
          <form>
            {/* Form fields (e.g., name, email, message) */}
            <label htmlFor="name">Name: <input type="text" id="name" name="name" /></label>
           

            <label htmlFor="email">Email:<input type="email" id="email" name="email" /></label>
            

            <label htmlFor="message">Message: <textarea id="message" name="message"></textarea></label>
           
            <button>submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          {/* Your contact details (website, phone, social accounts, email) go here */}
          <p>Website: www.idhs.in </p>
          <p>Phone: +917232854850</p>
          <p>Email: kailashupchar.private@gmail.com</p>
          <h3>
            Folow us
          </h3>
     
         
         <a href='https://www.facebook.com/IDHSV1'> <img src={Facebook} alt=''/> </a>
         <a href='https://www.instagram.com/idhs.in/'> <img src={Instagram} alt=''/></a>

          <a href='https://www.linkedin.com/company/99288687'>
          <img src={LinkdIn} alt=''/>
            </a>

         

          {/* Add more details as needed */}
        </div>

        {/* Map */}
        <div className="contact-map">
          <h2>Our Location</h2>
          {/* Your map component or integration goes here */}
          {/* Example: <iframe src="https://www.google.com/maps/embed?..." width="600" height="450" title="Our Location" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
