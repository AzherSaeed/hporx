import React from "react";
import Slider from "react-slick";
import markSlick1 from '../../assets/markSlick.svg';
import markSlick2 from '../../assets/markSlick2.svg';
import { MarketSlickContainer, MarkSlickImg } from "./StyledMarketPlace";

export const  MarketPlaceSlick = () => {
    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
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
                    infinite: false,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <MarketSlickContainer>
             <Slider {...settings} className='marketplace-slick'>
                <div>
                   <MarkSlickImg src={markSlick1} alt={markSlick1}/>
                </div>
                <div>
                   <MarkSlickImg src={markSlick2} alt={markSlick2}/>
                </div>
                <div>
                   <MarkSlickImg src={markSlick1} alt={markSlick1}/>
                </div>
                <div>
                   <MarkSlickImg src={markSlick2} alt={markSlick2}/>
                </div>
            </Slider>
        </MarketSlickContainer>
    )

}