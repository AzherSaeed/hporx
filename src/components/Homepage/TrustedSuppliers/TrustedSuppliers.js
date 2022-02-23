import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trustedSupplier1 from '../../../assets/trustedSupplier1.svg'
import trustedSupplier2 from '../../../assets/trustedSupplier2.svg'
import trustedSupplier3 from '../../../assets/trustedSupplier3.svg'
import trustedSupplier4 from '../../../assets/trustedSupplier4.svg'
import { TrustedSuppliersImg, TrustedSuppliersImgContainer, TrustedSuppliersMain } from './StyeldTrustedSuppliers';
import { Container } from 'react-bootstrap';



const TrustedSuppliers = () => {

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <TrustedSuppliersMain>
            <Container>
                <Slider {...settings} className='portable-slick'>
                    <div>
                        <TrustedSuppliersImgContainer>
                            <TrustedSuppliersImg src={trustedSupplier1} alt={trustedSupplier1} />
                        </TrustedSuppliersImgContainer>
                    </div>
                    <div>
                        <TrustedSuppliersImgContainer>
                            <TrustedSuppliersImg src={trustedSupplier2} alt={trustedSupplier2} />
                        </TrustedSuppliersImgContainer>
                    </div>
                    <div>
                        <TrustedSuppliersImgContainer>
                            <TrustedSuppliersImg src={trustedSupplier3} alt={trustedSupplier3} />
                        </TrustedSuppliersImgContainer>
                    </div>
                    <div>
                        <TrustedSuppliersImgContainer>
                            <TrustedSuppliersImg src={trustedSupplier4} alt={trustedSupplier4} />
                        </TrustedSuppliersImgContainer>
                    </div>

                </Slider>
            </Container>

        </TrustedSuppliersMain>
    )
}

export default TrustedSuppliers