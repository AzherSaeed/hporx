import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eVendorImg from '../../../assets/eCommerceVendor.svg'
import eVendorImg1 from '../../../assets/eCommerceVendor2.svg'
import eVendorImg2 from '../../../assets/eCommerceVendor3.svg'
import eVendorImg3 from '../../../assets/eCommerceVendor4.svg'
import eVendorHprox from '../../../assets/eVendorHprox.svg'
import eVendorMedi from '../../../assets/eVendorMedi.svg'
import eVendorFairman from '../../../assets/eVendorFairman.svg'
import { Container } from 'react-bootstrap';
import EVendorCard from './EVendorCard';
const EVendorSlick = () => {
  const eVendorImgs = [{ img: eVendorImg1, mini: eVendorHprox }, { img: eVendorImg2, mini: eVendorMedi }, { img: eVendorImg3, mini: eVendorFairman }, { img: eVendorImg, mini: eVendorHprox },{ img: eVendorImg1, mini: eVendorHprox }, { img: eVendorImg2, mini: eVendorMedi }, { img: eVendorImg3, mini: eVendorFairman }, { img: eVendorImg, mini: eVendorHprox },]
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className='slick-container'>

    <Container>
      <Slider {...settings} className='EVendor-slick'>
        {
          eVendorImgs.map((data, index) => {
           const {img,mini}=data
            return (
              <EVendorCard key={index} img={img} miniImg={mini} />
              
            )
          })
        }
      </Slider>
     
    </Container>
        </div>
  )
}

export default EVendorSlick