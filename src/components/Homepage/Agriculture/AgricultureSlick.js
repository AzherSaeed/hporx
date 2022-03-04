import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agri1 from '../../../assets/agri1.jpg';
import agri2 from '../../../assets/agri2.jpg';
import agri3 from '../../../assets/agri3.jpg';
import agri4 from '../../../assets/agri4.jpg';
import agri5 from '../../../assets/agri5.jpg';
import { AgricultureImg, AgricultureImg1, SlickMainContainer } from './StyledAgriculture';

const AgricultureSlick = () => {

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  return (
    <SlickMainContainer>
      <Slider {...settings} className='chillum-slick'>
        <AgricultureImg className='img-fluid' src={agri1} alt={agri1} />
        <AgricultureImg className='img-fluid' src={agri2} alt={agri2} />
        <AgricultureImg className='img-fluid' src={agri3} alt={agri3} />
        <AgricultureImg1 className='img-fluid' src={agri4} alt={agri4} />
        <AgricultureImg className='img-fluid' src={agri5} alt={agri5} />

      </Slider>
    </SlickMainContainer>
  )
}

export default AgricultureSlick