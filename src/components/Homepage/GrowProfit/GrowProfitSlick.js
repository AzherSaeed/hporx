import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import growProfit from '../../../assets/growProfit.svg'

import { Col, Container, Row } from 'react-bootstrap';
import { GrowProfitHeading, GrowProfitImg, GrowProfitSlickContainer, GrowProfitSubHeading } from './StyledGrowProfit';


const GrowProfitSlick = () => {

    var settings = {
        dots: false,
        infinite: true,
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
                    infinite: false,
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
       
            <Slider {...settings} className='p-0'>
                <div>
                    <GrowProfitSlickContainer className='d-flex align-items-center'>
                        <Row className='align-items-center'>
                            <Col lg={6}>
                                <Container>
                                    <GrowProfitHeading>GROW YOUR OWN PROFITS</GrowProfitHeading>
                                    <GrowProfitSubHeading>Are you located in a country, region, or state in which cannabis and marijuana consumption has been decriminalizedand regulated by law? A Cannabis Association? A marijuana Club? A Pharmacist Serving a Small Rural Population? licensed therapeutic herbalist? A rural doctor? Can you prescribe medical-grade extract or flower from Cannabaceae family grown in a laboratory standard contained environment agriculture? Alternatively, if you are a self-starter, higher achiever and you are gifted with entrepreneurialskill </GrowProfitSubHeading>
                                    <GrowProfitHeading>$35000</GrowProfitHeading>
                                </Container>
                            </Col>
                            <Col lg={6}>
                                <GrowProfitImg src={growProfit} alt={growProfit} />

                            </Col>

                        </Row>

                    </GrowProfitSlickContainer>
                </div>
                <div>
                    <GrowProfitSlickContainer className='d-flex align-items-center'>
                        <Row className='align-items-center'>
                            <Col lg={6}>
                                <Container>
                                    <GrowProfitHeading>GROW YOUR OWN PROFITS</GrowProfitHeading>
                                    <GrowProfitSubHeading>Are you located in a country, region, or state in which cannabis and marijuana consumption has been decriminalizedand regulated by law? A Cannabis Association? A marijuana Club? A Pharmacist Serving a Small Rural Population? licensed therapeutic herbalist? A rural doctor? Can you prescribe medical-grade extract or flower from Cannabaceae family grown in a laboratory standard contained environment agriculture? Alternatively, if you are a self-starter, higher achiever and you are gifted with entrepreneurialskill </GrowProfitSubHeading>
                                    <GrowProfitHeading>$35000</GrowProfitHeading>
                                </Container>
                            </Col>
                            <Col lg={6}>
                                <GrowProfitImg src={growProfit} alt={growProfit} />

                            </Col>

                        </Row>

                    </GrowProfitSlickContainer>
                </div>
                <div>
                    <GrowProfitSlickContainer className='d-flex align-items-center'>
                        <Row className='align-items-center'>
                            <Col lg={6}>
                                <Container>
                                    <GrowProfitHeading>GROW YOUR OWN PROFITS</GrowProfitHeading>
                                    <GrowProfitSubHeading>Are you located in a country, region, or state in which cannabis and marijuana consumption has been decriminalizedand regulated by law? A Cannabis Association? A marijuana Club? A Pharmacist Serving a Small Rural Population? licensed therapeutic herbalist? A rural doctor? Can you prescribe medical-grade extract or flower from Cannabaceae family grown in a laboratory standard contained environment agriculture? Alternatively, if you are a self-starter, higher achiever and you are gifted with entrepreneurialskill </GrowProfitSubHeading>
                                    <GrowProfitHeading>$35000</GrowProfitHeading>
                                </Container>
                            </Col>
                            <Col lg={6}>
                                <GrowProfitImg src={growProfit} alt={growProfit} />

                            </Col>

                        </Row>

                    </GrowProfitSlickContainer>
                </div>
            </Slider>
        

    )
}

export default GrowProfitSlick