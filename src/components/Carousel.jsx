import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Optional: Create your own styles for customization

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px", 
    arrows: true, 
  };

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNIzsa6dGOfAWIsMh-QhYq80_BDwnYHqQZA&s', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJPoc_xx5u5tHB1L_2DNoU266SROx5vID5eIrgDPeCVqLUgS3oqTzBttolcZI1fk1pYg&usqp=CAU', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR087JuTZLOdS5wRUdrQGF-zZsNMSimqLpGc2hifiG-MemsE5hy5YLxvjQAQmvYHHrEjxs&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fGW3QX5M__XQv_CPic_Q9Q_01wxefhdolkenlHWkX-Yrg2iwF7GXFP_Sd1Lnq7lFxc8&usqp=CAU ', 
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmdbcdn.b-cdn.net%2Fimg%2FPhotos%2FSlides%2Fimg%2520(15).webp&tbnid=_PpMfKH_-pLq6M&vet=10CAIQxiAoAGoXChMIgMvvk9nmiAMVAAAAAB0AAAAAEA4..i&imgrefurl=https%3A%2F%2Fmdbootstrap.com%2Fdocs%2Fstandard%2Fcomponents%2Fcarousel%2F&docid=S2l6UzxW_h_ycM&w=1320&h=583&itg=1&q=crousal%20image&ved=0CAIQxiAoAGoXChMIgMvvk9nmiAMVAAAAAB0AAAAAEA4',
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Live Campaigns</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-item">
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
