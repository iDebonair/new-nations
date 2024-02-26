import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Typography } from '@material-ui/core';
import churchBanner from '../assets/auditorium.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styling/Ministry.css';

const MinistryList = ({ onSelectMinistry }) => {
  const ministries = [
    { id: 1, name: 'Ushering', description: 'Welcome and guide attendees during services.', image: 'Connect.jpg' },
    { id: 2, name: 'Music', description: 'Lead worship and enhance the worship experience.', image: 'Choir.jpg' },
    { id: 3, name: 'Drama', description: 'Express biblical stories and messages through dramatic performances.', image: 'drama.jpg' },
    { id: 4, name: 'Children', description: 'Provide education and activities for children.', image: 'children.jpg' },
    // Add more ministries as needed
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Update screen size on resize
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev"></div>,
    nextArrow: <div className="slick-arrow slick-next"></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="ministry-list-container">
      {/* Banner Image */}
      <div className='bannerImage' style={{ width: '100vw', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
        <img
          src={churchBanner}
          alt="Banner"
          style={{ width: '110%', height: '250px', objectFit: 'cover', }}
        />
        {/* Text Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <Typography variant="h2" style={{ fontWeight: 'bold', fontSize: isSmallScreen ? '1.9rem' : '3rem', margin: 10, color: 'white' }} gutterBottom>
            Volunteer With Us
          </Typography>
        </div>
      </div>
      {/* Ministry Slider and Text */}
      <div className="ministry-slider-and-text"> 
        <div className="text-section">
          <h2>Join Us</h2>
          <p>
            The volunteers in our ministries are a group of incredible people that have discovered their gifts and passions and are actively serving in them. We invite you to join us. We believe God has a special place for you where you can use your unique abilities and passions to touch the lives of others, and that your life will never make sense until you find, develop, and fulfill your purpose in life.
          </p>
          <button className="learn-more-button" onClick={() => alert("Learn More Clicked")}>
            Learn More
          </button>
        </div>
        <div className="ministry-slider-container">
          <Slider {...sliderSettings} className="ministry-slider">
            {ministries.map((ministry) => (
              <div key={ministry.id} className="ministry-item">
                <div className="ministry-details">
                  <img src={`./assets/${ministry.image}`} alt={ministry.name} className="ministry-image" />
                  <div className="ministry-header">
                    <h3>{ministry.name}</h3>
                  </div>
                  <p>{ministry.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MinistryList;
