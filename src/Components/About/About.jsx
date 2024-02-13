// About.jsx

import React from 'react';
import './About.css';

import MissionImage from '../../Images/Misson.png'
import TeamImage from '../../Images/Team.png'
import ApproachImage from '../../Images/Approach.png'

const Section = ({ title, content, imageSrc, altText }) => (
      <section className="about-section" id='about'>
        <div className="section-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <img src={imageSrc} alt={altText} className="section-image" />
      </section>
    );
    
    const About = () => (
      <div>
      <div className="about-section">
        <h1>About us</h1>
        <div className="flex-container">
          <div className="content">
            <h3>Our Mission</h3>
            <p>We are committed to providing top-notch health services to our users within their city. Our mission is to help people achieve optimal health and wellness through personalized plans and ongoing support.</p>
          </div>
          <div className="image-container">
            <img src={MissionImage} alt='Mission Logo' />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="flex-container">
         
          <div className="content">
            <h3>Our team</h3>
            <p>Our whole team works day and night to facilitate the best and authentic health services in your city. We assure you that our team will deliver the best health services with a mobile app.</p>
          </div>
          <div className="image-container">
            <img src={TeamImage} alt='Team Logo' />
          </div>
        </div>
      </div>

      <div className="about-section">
       
        <div className="flex-container">
          <div className="content">
          <h3>Our Approach</h3>
            <p>At IDHS, we take a holistic approach to health and wellness. We believe that true health involves not just physical well-being but also mental, emotional, and spiritual well-being. That's why we are working to develop comprehensive digital solutions to access real health infrastructure plans that address all aspects of your health.</p>
          </div>
          <div className="image-container">
            <img src={ApproachImage} alt='Approach Logo' />
          </div>
        </div>
      </div>
    </div>
  );


export default About;