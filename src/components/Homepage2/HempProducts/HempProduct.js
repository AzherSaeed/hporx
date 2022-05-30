import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { StyleHemp } from "./StyleHempProduct";
import HempHeadingIcon from '../../../assets/HempHeadingIcon.svg';
import HempCardIcon from '../../../assets/HempCardIcon.svg';
import Slider from "react-slick";
import Banner from "./Banner";
import slidenext from '../../../assets/icons/angle-right.png';
import slideprev from '../../../assets/icons/angle-left.png';
import cardimage from '../../../assets/card-img.png';
import { Swiper, SwiperSlide } from 'swiper/react';
function HempProduct() {
  const hempImgs = [HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon]
  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyleHemp>
      <div className="container p-5">
        <div className="top-categories">
          <h1>Top Categories</h1>
          <div className="slick-btns">
          <button type="button" className="prev-btn">
            <img src={slideprev} alt="Pre icon" />
          </button>
          <button type="butotn" className="next-btn">
            <img src={slidenext} alt="Next icon" />
          </button>
          </div>
        </div>
        
        
        
        <Slider {...settings} className='hemp-slick'>
              {hempImgs.map((img,index)=>(
                  <div key={index}>
                  <Card className="cards">
                     <div className="card-body">
                         <img src={cardimage} className="cardimage" alt="cardimage"/>
                         <div className="overlay">
                           <h1>Seed Oil</h1>
                           <span>10k Products</span>
                         </div>
                     </div>
                  </Card>
              </div>
              ))}
         
           </Slider>
   
       
        <Banner />

      </div>
    </StyleHemp>);
}

export default HempProduct;