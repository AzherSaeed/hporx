import React from "react";
import { CustomCardContainer } from "./Globals";
import {IMAGE_URL} from '../../services/config'
import { Card } from "react-bootstrap";
import star from "../../assets/icons/star.png";

const CustomCard = ({img , title , price}) => {
  return (
    <CustomCardContainer>
      <Card className="customCard">
        <div className="customCard-body">
          <div className="image-section">
            <img
              className="main-img"
              src={IMAGE_URL + img}
              alt="Trending-Now"
            />
          </div>
          <div className="content">
            <div className="title">
              <h1>{title}</h1>
              <span>${price}</span>
            </div>
            <div className="rating">
              <div className="stars">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <div className="review">(43 Reviews)</div>
            </div>
            <button className="add-to-cart">
              <span className="cart"></span>Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </CustomCardContainer>
  );
};

export default CustomCard;
