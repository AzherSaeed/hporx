import React from "react";
import { StyleTrending, TrendingNowSlick } from "./StyleTrendingNow1";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import star from "../../../assets/icons/star.png";
import { Swiper, SwiperSlide } from 'swiper/react';


function TrendingNow1({ heading, imgs }) {

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
      <div className="container">
        <h1 style={style} className='main-heading'>{heading}</h1>
        
        <div className="mt-2-9">

        <Slider {...settings} className='trendingNow-slick'>
          {
            imgs.map((img, index) => (
                <div key={index} className="d-inline-block">
                <Card className="card">
                  <div className="card-body">
                    <div className="image-section">
                      <img className="main-img"  src={img} alt="Trending-Now" />
                    </div>
                    <div className="content">
                      <div className="title">
                        <h1>Purple Cookies</h1>
                        <span>$60.00</span>
                      </div>
                      <div className="rating">
                        <div className="stars">
                          <img src={star}/>
                          <img src={star}/>
                          <img src={star}/>
                          <img src={star}/>
                          <img src={star}/>
                        </div>
                        <div className="review">(43 Reviews)</div>
                      </div>
                      <button className="add-to-cart"><span className="cart"></span>Add to Cart</button>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          }
        </Slider>
        </div>
      </div>
    </StyleTrending>)
}
export default TrendingNow1;