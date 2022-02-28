import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap'
import prescribe from '../../../assets/prescribe.svg'
import prescribe01 from '../../../assets/prescribe01.svg'
import prescribe1 from '../../../assets/prescribe1.svg'
import prescribe2 from '../../../assets/prescribe2.svg'
import prescribe3 from '../../../assets/prescribe3.svg'
import { PrimaryHeading,TertiaryHeadingMedium, ViewMoreBtn } from '../../Globals/Globals'
import {ConsultDarkBtn, PrescribeSlickMain, PrescribeMainContainer } from './StyledPrescribe';
import PrescribeCard from './PrescribeCard';


const Prescribe = ({id}) => {

    const prescribeImgs1 = [prescribe, prescribe01];
    const prescribeImgs2 = [prescribe1, prescribe2, prescribe3];
    var settings = {
        dots: false,
        arrows: false,
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
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };


    return (
        <PrescribeMainContainer id={id} >
        <PrescribeSlickMain>
            <Container>
                <Slider {...settings} className='prescribe-slick'>
                    {
                        prescribeImgs1.map((img, index) => (
                            <PrescribeCard key={index} img={img} />
                        ))
                    }
                    <div className='text-container'>
                        <PrimaryHeading>Prescribe</PrimaryHeading>
                        <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                        <div className='prescribe-btns'>
                        <ConsultDarkBtn >CONSULTATION</ConsultDarkBtn>
                        <ViewMoreBtn  className='prescribe-btn2'>View more</ViewMoreBtn>
                        </div>
                    </div>
                </Slider>

                <div className='mt-4'>
                    <Slider {...settings} className='prescribe-slick'>
                        {
                            prescribeImgs2.map((img, index) => (
                                <PrescribeCard key={index} img={img} />
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </PrescribeSlickMain>
        </PrescribeMainContainer>
    )
}

export default Prescribe