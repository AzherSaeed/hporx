import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from 'react-bootstrap'
import prescribe from '../../../assets/prescribe.svg'
import prescribe1 from '../../../assets/prescribe1.svg'
import prescribe2 from '../../../assets/prescribe2.svg'
import prescribe3 from '../../../assets/prescribe3.svg'
import { ShopNowBtn } from '../../Globals/Globals'
import {PrescribeImg, PrescribeImgContainer, PrescribeButton } from './StyledPrescribe';


const Prescribe = () => {

    const prescribeImgs1 = [prescribe, prescribe];
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
        <>
            <Container>
                <Slider {...settings} >
                    {
                        prescribeImgs1.map((img, index) => (
                            <PrescribeImgContainer>
                                <div className="overlay">
                                </div>
                                <div className='inner-overlay'>
                                    <h3>About</h3>
                                    <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                                    <ShopNowBtn>Appointment</ShopNowBtn>
                                </div>
                                <PrescribeImg src={img} alt={img} />
                            </PrescribeImgContainer>

                        ))
                    }
                    <div className='main-div'>
                        <div className='inner-div'>

                        <h3>Prescribe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat officiis libero et eaque repellat? Distinctio nulla consequuntur placeat eum nesciunt velit qui deleniti aliquid?</p>
                        <PrescribeButton>CONSULTATION</PrescribeButton>
                        <PrescribeButton className='ms-2'>View more</PrescribeButton>
                        </div>
                    </div>
                </Slider>
            </Container>
            <div className='mt-4'>
                <Container>
                    <Slider {...settings}>
                        {
                            prescribeImgs2.map((img, index) => (

                                <PrescribeImgContainer>
                                    <div className="overlay">
                                    </div>
                                    <div className='inner-overlay'>
                                        <h3>About</h3>
                                        <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                                        <ShopNowBtn>Appointment</ShopNowBtn>
                                    </div>
                                    <PrescribeImg src={img} alt={img} />
                                </PrescribeImgContainer>

                            ))

                        }

                    </Slider>

                </Container>
            </div>

        </ >
    )
}

export default Prescribe