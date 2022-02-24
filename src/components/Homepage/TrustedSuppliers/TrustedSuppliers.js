import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import trustedSupplier2 from '../../../assets/trustedSupplier2.svg'
import trustedSupplier3 from '../../../assets/trustedSupplier3.svg'
import trustedSupplier4 from '../../../assets/trustedSupplier4.svg'
import trustedSupplier5 from '../../../assets/trustedSupplier5.svg'
import trustedSupplier6 from '../../../assets/trustedSupplier6.svg'
import { TrustedSuppliersImg, TrustedSuppliersImgContainer,TrustedSuppliersMainContainer } from './StyeldTrustedSuppliers';



const TrustedSuppliers = () => {
    const trustedSuppliersImgs = [trustedSupplier2, trustedSupplier3, trustedSupplier4,trustedSupplier5,trustedSupplier6, trustedSupplier2, trustedSupplier3, trustedSupplier4,trustedSupplier5,trustedSupplier6,]

    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
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
        <TrustedSuppliersMainContainer>
            <h3>Trusted International Brands</h3>
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
        </TrustedSuppliersMainContainer>
    )
}

export default TrustedSuppliers