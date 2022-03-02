import React from "react";
import { StyleTrending, TrendingNowSlick } from "./StyleTrendingNow";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';


function TrendingNow({ heading, imgs }) {

  // var settings = {
  //   arrows: true,
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <StyleTrending>
      <div className="container">
        <h1 className='main-heading'>{heading}</h1>
        <TrendingNowSlick>
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              200: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              // when window width is >= 480px
              450: {
                slidesPerView: 2,
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
                  <Card>
                    <div className="card-body">
                      <img src={img} alt="Trending-Now" />
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
          </Swiper>
        </TrendingNowSlick>
        {/* <Slider {...settings} className='trendingNow-slick'>
          {
            imgs.map((img, index) => (
              <div key={index} className="d-inline-block">
                <h5 className="outside-card-text">Fairman Online</h5>
                <Card>
                  <div className="card-body">
                    <img src={img} alt="Trending-Now" />
                    <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                    <h4>From $ 35</h4>
                  </div>
                </Card>
              </div>
            ))
          }
        </Slider> */}
      </div>
    </StyleTrending>)
}
export default TrendingNow;