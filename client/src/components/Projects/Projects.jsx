import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Projects.css";

import internship from "../../assets/internship.jpg";
import services from "../../assets/services.jpg";
import training from "../../assets/training.jpeg";

const Project = () => {
  const googleDriveLink = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handleClick = () => {
    window.location.href = googleDriveLink;
  };

  const images = [
    internship,
    services,
    training
  ];

  return (
    <div className="project-container" id='projects'>
      <h1 className='image-heading'>Projects</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={handleClick}>
            <img className="slider-image" src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
