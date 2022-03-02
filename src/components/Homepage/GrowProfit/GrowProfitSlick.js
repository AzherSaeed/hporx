import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrowProfitCard from './GrowProfitCard';
import { Container } from 'react-bootstrap';


const GrowProfitSlick = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='grow-profit-width'>
            <Slider {...settings} className='grow-profit-slick'>
                <GrowProfitCard />
                <GrowProfitCard />
                <GrowProfitCard />
            </Slider>
        </div>


    )
}

export default GrowProfitSlick