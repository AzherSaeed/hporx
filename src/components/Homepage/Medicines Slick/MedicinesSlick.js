import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medic1 from "../../../assets/medic1.jpg";
import medic2 from "../../../assets/medic2.jpg";
import medic4 from "../../../assets/medic3.jpg";
import {
  MedicineContainerMain,
  MedicineImg,
  MedicineImgContainer,
  MedicineSlickContainer,
} from "./StyledMedicineSlick";
import { Container } from "react-bootstrap";
import { AddToCartBtn } from "../../Globals/Globals";

const MedicinesSlick = () => {
  const imgContainer = [medic1, medic2, medic1,medic4,medic1, medic2, medic1,medic4];
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MedicineContainerMain>
      <Container>
        <MedicineSlickContainer>
        <Slider {...settings} className='medicine-slick'>

          {imgContainer.map((img, index) => (
            <div key={index}>
              <div className="text-center medicine-text">
                <span className="text-red" >Treats</span>:<span className="disease-text">Seizures</span>
              </div>
              <MedicineImgContainer>
                <div className="overlay"></div>
                <div className="inner-overlay">
                  <AddToCartBtn>Add to Cart</AddToCartBtn>
                </div>
                <MedicineImg src={img} alt={img} />
              </MedicineImgContainer>
            </div>
          ))}
        </Slider>
        </MedicineSlickContainer>
      </Container>
    </MedicineContainerMain>
  );
};

export default MedicinesSlick;
