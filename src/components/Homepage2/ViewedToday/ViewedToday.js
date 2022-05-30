import React from 'react';
import { ViewTodaySlick, ViewTodayStyle } from './StyleViewToday'
import ViewToday from '../../../assets/view-today.png';
import usa from '../../../assets/usa.png';
import { Card} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';


function ViewedToday({heading}) {

    const viewTodayImgs = [ViewToday, ViewToday, ViewToday, ViewToday, ViewToday, ViewToday]
    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <ViewTodayStyle>
            <div className='container'>
                <div className='main-heading'>{heading}</div>
                <ViewTodaySlick>

          </ViewTodaySlick>
                <Slider {...settings} className='viewToday-slick'>
                {
                    viewTodayImgs.map((img, index) => (
                      <div key={index} className='view-today'>
                        <div className='card-inner'>
                          <div className='card'>
                              <div className='image-section'>
                                <img src={ViewToday} alt="card image"/>
                                <span className='tag'>Ad</span>
                              </div>
                              <div className='advertise'>
                                To advertise
                                <img src={usa} alt="Usa Flag" /> 
                                <span>+1 (213) 370 087 0873</span>
                              </div>
                          </div>
                        </div> 
                      </div>
                    ))
                }
                 </Slider>
               
            </div>
        </ViewTodayStyle>);
}

export default ViewedToday;
