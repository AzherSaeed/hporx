import React from 'react'
import { Col, Row } from 'react-bootstrap'
import portables1 from '../../../assets/portables1.svg'
import portables2 from '../../../assets/portables2.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortableMiniImg, PortableMiniImgContainer, PortableSlickMain } from './PortableStyles';
import { AddToCartBtn, PriceBtn} from '../../Globals/Globals';


const PortableSlick = () => {

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
    <PortableSlickMain>
      <Slider {...settings} className='portable-slick'>
      
      <div>
          <Row className='d-flex align-items-center'>
            <Col  xs={5}>
              
                <PortableMiniImgContainer>
                  <div className='inner-overlay'>
                    <div className='mb-3'>
                    <PriceBtn>$540</PriceBtn>
                    </div>
                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                  </div>
                  <PortableMiniImg src={portables1} alt='portable-img1' />

                </PortableMiniImgContainer>
             
            </Col>
            <Col  xs={5} >
            <PortableMiniImgContainer>
                  <div className='inner-overlay'>
                    <div className='mb-3'>
                    <PriceBtn>$540</PriceBtn>
                    </div>
                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                  </div>
                  <PortableMiniImg src={portables2} alt='portable-img2' />

                </PortableMiniImgContainer>
            </Col>
          </Row>
        </div>
        <div>
          <Row className='d-flex align-items-center'>
            <Col  xs={5}>
              
                <PortableMiniImgContainer>
                  <div className='inner-overlay'>
                    <div className='mb-3'>
                    <PriceBtn>$540</PriceBtn>
                    </div>
                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                  </div>
                  <PortableMiniImg src={portables1} alt='portable-img1' />

                </PortableMiniImgContainer>
             
            </Col>
            <Col  xs={5} >
            <PortableMiniImgContainer>
                  <div className='inner-overlay'>
                    <div className='mb-3'>
                    <PriceBtn>$540</PriceBtn>
                    </div>
                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                  </div>
                  <PortableMiniImg src={portables2} alt='portable-img2' />

                </PortableMiniImgContainer>
            </Col>
          </Row>
        </div>


      </Slider>
    </PortableSlickMain>
  )
}

export default PortableSlick