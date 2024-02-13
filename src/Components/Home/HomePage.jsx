import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import MissionImage from '../../Images/Misson.png'
import TeamImage from '../../Images/Team.png'
import ApproachImage from '../../Images/Approach.png'

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
        <h1>IDHS - Indian Digital Health Solutions</h1>
        <p>
          Explore our services to revolutionize healthcare. Join us on the journey towards a healthier and happier life.
        </p>

        <Slider {...carouselSettings}className='images-slider'>
          <div >
            <img src={MissionImage}alt="Feature 1" />
          </div>
          <div>
            <img src={TeamImage} alt="Feature 2" />
          </div>
          <div>
            <img src={ApproachImage} alt="Feature 3" />
          </div>
          <div>
            <img src={MissionImage} alt="Feature 4" />
          </div>
          <div>
            <img src={MissionImage} alt="Feature 5" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
