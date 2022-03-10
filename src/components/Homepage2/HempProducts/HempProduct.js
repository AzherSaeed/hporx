import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { StyleHemp } from "./StyleHempProduct";
import HempHeadingIcon from '../../../assets/HempHeadingIcon.svg';
import HempCardIcon from '../../../assets/HempCardIcon.svg';
import Slider from "react-slick";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
function HempProduct() {
  const hempImgs = [HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon, HempCardIcon]
  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
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
        <h1 className="text-center"><span><img src={HempHeadingIcon} alt={HempHeadingIcon} className="imgHeading" /></span>HEMP PRODUCTS ONLINE</h1>
        {/* <Swiper
          breakpoints={{
            // when window width is >= 320px
            300: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
              spaceBetween: 1
            },
            1000: {
              slidesPerView: 7,
              spaceBetween: 1
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 1
            }
          }}
          spaceBetween={1}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        > {
            hempImgs.map((img, index) => (
              <SwiperSlide key={index} >  <div key={index}>
                <Card className="cards">
                  <div className="text-center card-body">
                    <img src={HempCardIcon} className="IconImage" alt="Iconimage" />
                    <h2>Categories 1</h2>
                  </div>
                </Card>
              </div></SwiperSlide>
            ))
          }

          {/* <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* </Swiper> */} 
        <Slider {...settings} className='hemp-slick'>
              {hempImgs.map((img,index)=>(
                  <div key={index}>
                  <Card className="cards">
                     <div className="text-center card-body">
                         <img src={HempCardIcon} className="IconImage" alt="Iconimage"/>
                         <h2>Categories 1</h2>
                     </div>
                  </Card>
              </div>
              ))}
         
           </Slider>
        <Slider {...settings} className='hemp-slick mt-4'>
              {hempImgs.map((img,index)=>(
                  <div key={index}>
                  <Card className="cards">
                     <div className="text-center card-body">
                         <img src={HempCardIcon} className="IconImage" alt="Iconimage"/>
                         <h2>Categories 1</h2>
                     </div>
                  </Card>
              </div>
              ))}
           </Slider>
        {/* <Swiper
          breakpoints={{
            // when window width is >= 320px
            300: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
              spaceBetween: 1
            },
            1000: {
              slidesPerView: 7,
              spaceBetween: 1
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 1
            }
          }}
          spaceBetween={1}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        > {
            hempImgs.map((img, index) => (
              <SwiperSlide key={index} >  <div key={index}>
                <Card className="cards">
                  <div className="text-center card-body">
                    <img src={HempCardIcon} className="IconImage" alt="Iconimage" />
                    <h2>Categories 1</h2>
                  </div>
                </Card>
              </div></SwiperSlide>
            ))
          }

          {/* <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* </Swiper> */} 
        <Banner />

      </div>
    </StyleHemp>);
}

export default HempProduct;