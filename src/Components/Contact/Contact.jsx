import React from 'react';
import './Contact.css';
import Facebook from '../../Images/Facebook.png';
import Instagram from '../../Images/instagram.png';
import LinkdIn from '../../Images/linkedin.png';

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact us</h1>
      <div className="contact-container">

        <div className="contact-details">
          <h2>Contact Details</h2>
          {/* Your contact details (website, phone, social accounts, email) go here */}
          <p>Website: www.idhs.in </p>
          <p>Phone: +917232854850</p>
          <p>Email: kailashupchar.private@gmail.com</p>
          
        </div>
        <div className="follow-details">
            <h3>Follow us</h3>
            <a href='https://www.facebook.com/IDHSV1'>
              <img src={Facebook} alt='Facebook' />
            </a>
            <a href='https://www.instagram.com/idhs.in/'>
              <img src={Instagram} alt='Instagram' />
            </a>
            <a href='https://www.linkedin.com/company/99288687'>
              <img src={LinkdIn} alt='LinkedIn' />
            </a>
          </div>
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
