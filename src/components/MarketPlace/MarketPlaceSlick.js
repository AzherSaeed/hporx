import React from "react";
import Slider from "react-slick";
import markSlick1 from '../../assets/markSlick.svg';
import markSlick2 from '../../assets/markSlick2.svg';
import PlayBtn from "../Globals/PlayBtn";
import { MarketSlickContainer, MarkSlickImg, MarkSlickImgContainer } from "./StyledMarketPlace";

export const MarketPlaceSlick = () => {
    const marketPlaceImgs = [markSlick1, markSlick2, markSlick1, markSlick2,]
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
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
                    infinite: true,
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
                {
                    marketPlaceImgs.map((img, index) => (
                        <MarkSlickImgContainer key={index}>
                            <div className='inner-overlay'>
                                <PlayBtn />
                            </div>
                            <MarkSlickImg src={img} alt={img} />
                        </MarkSlickImgContainer>
                    ))
                }
            </Slider>
        </MarketSlickContainer>
    )

}