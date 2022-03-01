import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import medic1 from "../../../assets/medic1.svg";
import medic2 from "../../../assets/medic2.svg";
import medic3 from "../../../assets/medic3.svg";
import medic4 from "../../../assets/medic4.svg";
import {
  MedicineContainerMain,
  MedicineImg,
  MedicineImgContainer,
} from "./StyledMedicineSlick";
import { Container } from "react-bootstrap";
import { AddToCartBtn } from "../../Globals/Globals";

const MedicinesSlick = () => {
  const imgContainer = [medic1, medic2, medic3, medic4, medic2, medic3];
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
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
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
        <Slider {...settings}>
          {imgContainer.map((img, index) => (
            <div key={index}>
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
      </Container>
    </MedicineContainerMain>
  );
};

export default MedicinesSlick;
