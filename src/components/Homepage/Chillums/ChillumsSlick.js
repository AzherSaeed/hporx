import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chillum1 from '../../../assets/chillum1.svg'
import chillum2 from '../../../assets/chillum2.svg'
import chillum3 from '../../../assets/chillum3.svg'
import ChillumCard from './ChillumCard';

const ChillumsSlick = () => {


  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div>
      <Slider {...settings} className='chillum-slick'>
        <ChillumCard img={chillum1} />
        <ChillumCard img={chillum2} />
        <ChillumCard img={chillum3} />
        <ChillumCard img={chillum1} />
        <ChillumCard img={chillum2} />
        <ChillumCard img={chillum3} />
      </Slider>
    </div>


  )
}

export default ChillumsSlick