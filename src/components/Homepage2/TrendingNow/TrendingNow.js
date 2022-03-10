import React from "react";
import { StyleTrending, TrendingNowSlick, TrendNowInner } from "./StyleTrendingNow";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';


function TrendingNow({ heading, imgs }) {

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const style={
    borderBottom:'1px solid #DADADA',
    paddingBottom:'1rem',
}

  return (
    <StyleTrending>
        <TrendNowInner>
      <div className="container">

       
        <h1 style={style} className='main-heading'>{heading}</h1>
        {/* <TrendingNowSlick>
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              200: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              // when window width is >= 480px
              500: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              820: {
                slidesPerView: 3,
                spaceBetween: 30
              },
             
             
              1000: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            spaceBetween={30}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          > {
              imgs.map((img, index) => (

                <SwiperSlide key={index} > <div key={index} className="d-inline-block">
                  <h5 className="outside-card-text">Fairman Online</h5>
                  <Card className="card">
                    <div className="card-body">
                      <img className="main-img" src={img} alt="Trending-Now" />
                      <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                      <h4>From $ 35</h4>
                    </div>
                  </Card>
                </div></SwiperSlide>
              ))
            }

            {/* <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide> */}
          {/* </Swiper>
        </TrendingNowSlick> */} 
        <Slider {...settings} className='trendingNow-slick'>
          {
            imgs.map((img, index) => (
              <div key={index} className="d-inline-block">
                <h5 className="outside-card-text">Fairman Online</h5>
                <Card>
                  <div className="card-body">
                    <div className='main-img'>
                    <img   src={img} alt="Trending-Now" />
                    </div>
                    <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                    <h4>From $ 35</h4>
                  </div>
                </Card>
              </div>
            ))
          }
        </Slider>
      </div>
        </TrendNowInner>
    </StyleTrending>)
}
export default TrendingNow;