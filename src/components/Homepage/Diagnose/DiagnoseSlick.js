import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import diagnose1 from '../../../assets/Diagnose1.svg'
import diagnose2 from '../../../assets/Diagnose2.svg'
import { Container } from 'react-bootstrap';
import { DiagnoseAppointmentBtn, DiagnoseImg, DiagnoseImgContainer, StyledSlickContainer } from './StyledDiagnose';
import { AddToCartBtn } from '../../Globals/Globals';
const DiagnoseSlick = () => {
    const diagnoseImgs = [diagnose1, diagnose2, diagnose1, diagnose2]
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
        <StyledSlickContainer>
            <Container>
                <Slider {...settings} className='diagnose-slick'>
                    {
                        diagnoseImgs.map((img, index) => (
                            <DiagnoseImgContainer key={index}>
                                <DiagnoseImg src={img} alt={img} />
                                <div className='inner-overlay'>
                                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                                </div>
                            </DiagnoseImgContainer>
                        ))
                    }
                </Slider>
                <h4>HEALTH DATA GOVERNANCE PROTECTION, ACCOUNTABILITY AND COMPLIANCE</h4>
                <p>HIPPA, GDPR, CCPA, PIPEDA PHI, PIPEDA, LGPD, POPI and The Privacy Act's AUS 1988, UK 2018, NZ 2020 COMPLIANT</p>
                <DiagnoseAppointmentBtn>Appointment</DiagnoseAppointmentBtn>
            </Container>
        </StyledSlickContainer>
    )
}

export default DiagnoseSlick