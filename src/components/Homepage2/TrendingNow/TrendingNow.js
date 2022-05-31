import React from "react";
import { StyleTrending, TrendNowInner} from "./StyleTrendingNow";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import {BASE_URL, GET_PRODUCTS , IMAGE_URL} from '../../../services/config';
import axios from 'axios'
import {useQuery} from 'react-query';



function TrendingNow({ heading, imgs }) {

  
  const {
    data: productData,
    isSuccess: stateIsSuccess,
    isLoading: stateIsLoading,
    isFetching: stateIsFetching,
    error: stateError,
    isError: stateIsError,
  } = useQuery(
    "products",
    () => {
      return axios.get(BASE_URL + GET_PRODUCTS);
    },
    {
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      select: (data) =>
        data.data.data.filter((item) => item.productType === "manProduct"),
      enabled: true,
    }
  );

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
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const style = {
    borderBottom: "1px solid #DADADA",
    paddingBottom: "1rem",
  };

  return (
    <StyleTrending>
      <TrendNowInner>
        <div className="container">
          <h1 style={style} className="main-heading">
            {heading}
          </h1>
          {stateIsLoading && <h1>Loading...</h1>}
          <Slider {...settings} className="trendingNow-slick">
            {!stateIsLoading && productData.map((item, index) => (
              <div key={index} className="d-inline-block">
                <h5 className="outside-card-text">{item.title}</h5>
                <Card>
                  <div className="card-body">
                    <div className="main-img">
                      <img src={IMAGE_URL+item.productImage} alt="Trending-Now" />
                    </div>
                    <p>{item.description}</p>
                    <h4>From $ {item.price}</h4>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </TrendNowInner>
    </StyleTrending>
  );
}
export default TrendingNow;
