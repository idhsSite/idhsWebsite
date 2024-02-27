import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Pages.css'
import {HomeServices} from "../components/common/CommanCard"

function HomePage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add autoplay property
    autoplaySpeed: 1500,
  };

  return (
    <div className="home-container">
      <div className="content">
        
        <div>
        <p>
          Explore our services to revolutionize healthcare. Join us on the journey towards a healthier and happier life.
        </p>
        </div>
        <HomeServices/>

        
      </div>
    </div>
  );
}

export default HomePage;
