import React from 'react';
import { ViewTodaySlick, ViewTodayStyle } from './StyleViewToday'
import ViewToday from '../../../assets/ViewToday.svg';
import { Card} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

function ViewedToday({heading}) {

    const viewTodayImgs = [ViewToday, ViewToday, ViewToday, ViewToday, ViewToday, ViewToday]
    // var settings = {
    //     arrows: true,
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           infinite: false,
    //           dots: false,
    //         },
    //       },
    //       {
    //         breakpoint: 980,
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
        <ViewTodayStyle>
            <div className='container'>
                <div className='main-heading'>{heading}</div>
                <ViewTodaySlick>

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
              1000: {
                slidesPerView: 3,
                spaceBetween: 30
              },
             
            }}
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          > {
            viewTodayImgs.map((img, index) => (
                <SwiperSlide key={index} >  <Card className='card'>
                <div className='d-flex ' >
                    <img src={ViewToday} alt='Everything today' />
                    <div className='right-block'>
                        <h2>Fairman Online</h2>
                        <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                        <h4>From $ 35</h4>
                    </div>
                </div>
            </Card></SwiperSlide>
              ))
            }

            
          </Swiper>
          </ViewTodaySlick>
                {/* <Slider {...settings} className='viewToday-slick'>
                {
                    viewTodayImgs.map((img, index) => (
                        <Card className='card'>
                            <div className='d-flex ' >
                                <img src={ViewToday} alt='Everything today' />
                                <div className='right-block'>
                                    <h2>Fairman Online</h2>
                                    <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                                    <h4>From $ 35</h4>
                                </div>
                            </div>
                        </Card>
                    ))
                }
                 </Slider> */}
               
            </div>
        </ViewTodayStyle>);
}

export default ViewedToday;
