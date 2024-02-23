import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Crouser3 from '../../src/images/Crouser3.png'
import Crouser1 from '../../src/images/Crouser1.png'
import Crouser2 from '../../src/images/Crouser2.png'
import './Pages.css'

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
        <h1>IDHS - Indian Digital Health Solutions</h1>
        <p>
          Explore our services to revolutionize healthcare. Join us on the journey towards a healthier and happier life.
        </p>
        </div>

        <Slider {...carouselSettings}className='images-slider'>
          
          <div>
            <img src={Crouser1} alt="Feature 2" />
          </div>
          <div>
            <img src={Crouser2} alt="Feature 3" />
          </div>
          <div>
            <img src={Crouser3} alt="Feature 4" />
          </div>
        
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
