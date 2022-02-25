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
import { PrimaryHeading, ShopNowBtn, TertiaryHeadingMedium, ViewMoreBtn } from '../../Globals/Globals'
import { PrescribeImg, PrescribeImgContainer, PrescribeButton, ConsultDarkBtn, PrescribeSlickMain } from './StyledPrescribe';
import PrescribeCard from './PrescribeCard';


const Prescribe = () => {

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
                breakpoint: 600,
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
        <PrescribeSlickMain>
           
<Container>

                <Slider {...settings} className='prescribe-slick'>
                    {
                        prescribeImgs1.map((img, index) => (
                            <PrescribeCard key={index} img={img} />
                        ))
                    }
                    <div className='main-div'>
                        <PrimaryHeading>Prescribe</PrimaryHeading>
                        <TertiaryHeadingMedium>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat officiis libero et eaque repellat? Distinctio nulla consequuntur placeat eum nesciunt velit qui deleniti aliquid?</TertiaryHeadingMedium>
                        <ConsultDarkBtn>CONSULTATION</ConsultDarkBtn>
                        <ViewMoreBtn className='ms-2'>View more</ViewMoreBtn>
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
    )
}

export default Prescribe