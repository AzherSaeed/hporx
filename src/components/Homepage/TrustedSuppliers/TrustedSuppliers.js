import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trustedSupplier2 from '../../../assets/trustedSupplier2.svg'
import trustedSupplier3 from '../../../assets/trustedSupplier3.svg'
import trustedSupplier4 from '../../../assets/trustedSupplier4.svg'
import { TrustedSuppliersImg, TrustedSuppliersImgContainer, TrustedSuppliersMain } from './StyeldTrustedSuppliers';



const TrustedSuppliers = () => {
    const trustedSuppliersImgs = [trustedSupplier2, trustedSupplier3, trustedSupplier4, trustedSupplier2, trustedSupplier3, trustedSupplier4, trustedSupplier2, trustedSupplier3, trustedSupplier4,trustedSupplier2, trustedSupplier3, trustedSupplier4, trustedSupplier2, trustedSupplier3, trustedSupplier4, trustedSupplier2, trustedSupplier3, trustedSupplier4,]

    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <TrustedSuppliersMain>
            <Slider {...settings} className='trusted-suppliers-slick'>
                {trustedSuppliersImgs.map((supplierImg, index) => (
                    <div key={index}>
                        <TrustedSuppliersImgContainer>
                            <TrustedSuppliersImg src={supplierImg} alt={supplierImg} />
                        </TrustedSuppliersImgContainer>
                    </div>
                ))
                }
            </Slider>
        </TrustedSuppliersMain>
    )
}

export default TrustedSuppliers