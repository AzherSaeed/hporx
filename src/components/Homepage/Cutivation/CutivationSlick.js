import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cutivation1 from '../../../assets/cutivation1.svg'
import cutivation2 from '../../../assets/cutivation2.svg'
import cutivation3 from '../../../assets/cutivation3.svg'
import cutivation4 from '../../../assets/cutivation4.svg'
import cutivation5 from '../../../assets/cutivation5.svg'
import cutivation6 from '../../../assets/cutivation6.svg'
import { Container } from 'react-bootstrap';
import { CutivationImg, CutivationImgContainer, CutivationSlickContainer } from './StyledCutation';
import { AddToCartBtn } from '../../Globals/Globals';

const CutivationSlick = () => {
    const cutivationImgs = [cutivation1, cutivation2, cutivation3, cutivation4, cutivation5, cutivation6]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <Container>
            <CutivationSlickContainer>

                <Slider {...settings} className='cutivation-slick'>
                    {
                        cutivationImgs.map((cutivation,index) => (
                            <CutivationImgContainer key={index}>
                                <CutivationImg src={cutivation} alt={cutivation} />
                                <div className='inner-overlay'>
                                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                                </div>
                            </CutivationImgContainer>
                        ))
                    }

                </Slider>
            </CutivationSlickContainer>
        </Container>
    )
}

export default CutivationSlick