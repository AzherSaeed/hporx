import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import inhalte1 from '../../../assets/inhalate3.svg'
import inhalate4 from '../../../assets/inhalate4.svg'
import { InhalatedImgContainer, InhalteImg } from './StyledInhalate'
import { ShopNowBtn } from '../../Globals/Globals';

const InhalateSlick = () => {
  const imgContainer = [inhalte1, inhalate4,inhalte1, inhalate4]


  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  return (
    <div className='slick-main-div'>
      <Slider {...settings} className='inhalate-slick'>
        {imgContainer.map((img, index) => (
          <InhalatedImgContainer key={index}>
            <InhalteImg src={img} alt={img} />
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
              <h3>Inhalate</h3>
              <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
              <ShopNowBtn>Shop Now</ShopNowBtn>
            </div>
          </InhalatedImgContainer>
        ))

        }
      </Slider>
      
    </div>


  )
}

export default InhalateSlick