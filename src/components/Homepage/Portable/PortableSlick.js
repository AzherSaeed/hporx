import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row } from 'react-bootstrap'
import portables1 from '../../../assets/portables1.svg'
import portables2 from '../../../assets/portables2.svg'
import { PortableSlickMain } from './PortableStyles';
import PortableCard from './PortableCard';


const PortableSlick = () => {

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <PortableSlickMain>
      <Slider {...settings} className='portable-slick'>
        <div>
          <Row className='d-flex align-items-center'>
            <PortableCard img={portables1} />
            <PortableCard img={portables2} />
          </Row>
        </div>
        <div>
          <Row className='d-flex align-items-center'>
            <PortableCard img={portables1} />
            <PortableCard img={portables2} />
          </Row>
        </div>

      </Slider>
    </PortableSlickMain>
  )
}

export default PortableSlick