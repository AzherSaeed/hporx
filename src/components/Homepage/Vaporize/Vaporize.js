import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VaporizeImg1, VaporizeImg2, VaporizeMainContainer, VaporizeImagesContainer } from './StyledVaporize'
import { Container, Row, Col } from 'react-bootstrap';
import VaporizeSlickCard from './VaporizeSlickCard';


const Vaporize = () => {

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <VaporizeMainContainer>
            <Container>
                <div className="vaporize-inner-container">
                    <Slider {...settings} className='vaporize-slick'>
                     <VaporizeSlickCard/>
                      <VaporizeSlickCard/>

                    </Slider>
                </div>
            </Container>
        </VaporizeMainContainer>
    )
}

export default Vaporize