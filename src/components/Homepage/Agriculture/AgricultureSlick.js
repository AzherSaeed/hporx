import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agri1 from '../../../assets/agri1.svg';
import agri2 from '../../../assets/agri2.svg';
import agri3 from '../../../assets/agri3.svg';
import agri4 from '../../../assets/agri4.svg';
import { AgricultureImg, SlickMainContainer } from './StyledAgriculture';

const AgricultureSlick = () => {
const imgContainer=[agri1,agri2,agri3,agri4]
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
          {
              imgContainer.map((img,index)=>(
                  <div>
                  <AgricultureImg key={index} className='img-fluid' src={img} alt={img} />
                  </div>
              ))
          }
      </Slider>
    </SlickMainContainer>
  )
}

export default AgricultureSlick