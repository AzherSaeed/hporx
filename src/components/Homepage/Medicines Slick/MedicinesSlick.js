import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medic1 from '../../../assets/medic1.svg'
import medic2 from '../../../assets/medic2.svg'
import medic3 from '../../../assets/medic3.svg'
import { MedicineContainerMain, MedicineImg, MedicineImgContainer } from './StyledMedicineSlick';
import { Container } from 'react-bootstrap';


const MedicinesSlick = () => {

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
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
        <MedicineContainerMain>
            <Container>
                <Slider {...settings} className='portable-slick'>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic1} alt={medic1} />
                        </MedicineImgContainer>
                    </div>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic2} alt={medic2} />
                        </MedicineImgContainer>
                    </div>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic3} alt={medic3} />
                        </MedicineImgContainer>
                    </div>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic1} alt={medic1} />
                        </MedicineImgContainer>
                    </div>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic2} alt={medic2} />
                        </MedicineImgContainer>
                    </div>
                    <div>
                        <MedicineImgContainer>
                            <MedicineImg src={medic3} alt={medic3} />
                        </MedicineImgContainer>
                    </div>
                </Slider>
            </Container>

        </MedicineContainerMain>
    )
}

export default MedicinesSlick