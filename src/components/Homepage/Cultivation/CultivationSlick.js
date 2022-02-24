import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cultivation4 from '../../../assets/cutivation4.svg'
import cultivation5 from '../../../assets/cutivation5.svg'
import cultivation6 from '../../../assets/cutivation6.svg'
import CultivationCard from './CultivationCard';
import { Container } from 'react-bootstrap';


const CultivationSlick = () => {

    const cultivationImgs = [cultivation4,
        cultivation5,
        cultivation6, cultivation4,
        cultivation5,
        cultivation6]

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
                    slidesToShow: 2,
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
            <Slider {...settings} className='cultivation-slick'>
                {
                    cultivationImgs.map((img, index) => (
                        <div key={index}>
                            <CultivationCard img={img} />
                        </div>
                    ))
                }
            </Slider>
        </Container>

    )
}

export default CultivationSlick