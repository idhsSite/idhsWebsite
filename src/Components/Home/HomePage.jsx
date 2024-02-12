import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>IDHS - Indian Digital Health Solutions</h1>
        <p>
          Welcome to IDHS, your gateway to innovative digital health solutions. We are dedicated to creating transformative products that contribute to your well-being.
        </p>
        <p>
          Explore our services designed to revolutionize healthcare. Join us on the journey towards a healthier and happier life.
        </p>
        <span>
          <input type="email" placeholder='Enter your email for updates' />
          <button>Subscribe</button>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
