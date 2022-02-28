import React from 'react';
// import Slider from 'react-slick';
// import { ViewTodayStyle } from '../ViewedToday/StyleViewToday';
import { BroswerSlick, BrowserHistoryImg, BrowserHistoryMain } from './StyledBrowserHistory';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from 'react-bootstrap';

function BrowserHistory({ imgs }) {


  // var settings = {
  //     arrows: true,
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     initialSlide: 0,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 5,
  //           slidesToScroll: 1,
  //           infinite: false,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //           initialSlide: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };
  return (
    <Container>
      <BrowserHistoryMain>
        <div className='main-heading'>Browsing History</div>
        <BroswerSlick>
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              300: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          > {
              imgs.map((img, index) => (
                <SwiperSlide key={index} > <BrowserHistoryImg src={img} alt='Everything today' /></SwiperSlide>
              ))
            }

            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
          {/* <div className='container'>
                <div className='main-heading'>Browsing History</div>
                <Slider {...settings} className='viewToday-slick mt-3'>
                {
                    imgs.map((img, index) => (
                       
                            <div key={index} className='d-flex justify-content-center ' >
                                <BrowserHistoryImg src={img} alt='Everything today' />
                            </div>
                        
                    ))
                }
                 </Slider>
                </div> */}
        </BroswerSlick>
      </BrowserHistoryMain>
    </Container>
  );
}

export default BrowserHistory;
