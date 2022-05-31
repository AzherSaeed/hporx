import React from "react";
import { ViewTodayStyle } from "./StyleViewToday";
import ViewToday from "../../../assets/view-today.png";
import usa from "../../../assets/usa.png";
import Slider from "react-slick";
import {BASE_URL, GET_PRODUCTS , IMAGE_URL} from '../../../services/config';
import axios from 'axios'
import {useQuery} from 'react-query';





function ViewedToday({ heading }) {
  // const viewTodayImgs = [ViewToday, ViewToday, ViewToday, ViewToday, ViewToday, ViewToday]

  const {
    data: viewTodayImgs,
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
        data.data.data.filter((item) => item.productType === "viewedToday"),
      enabled: true,
    }
  );

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
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
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ViewTodayStyle>
      <div className="container">
        <div className="main-heading">{heading}</div>
        {stateIsLoading && <h1>Loading...</h1>}
        {/* <ViewTodaySlick></ViewTodaySlick> */}
        <Slider {...settings} className="viewToday-slick">
          
          {!stateIsLoading && viewTodayImgs.map((item, index) => (
            <div key={index} className="view-today">
              <div className="card-inner">
                <div className="card">
                  <div className="image-section">
                    <img src={IMAGE_URL+item.productImage} alt="card image" />
                    <span className="tag">Ad</span>
                  </div>
                  <div className="advertise">
                    To advertise
                    <img src={usa} alt="Usa Flag" />
                    <span>+1 (213) 370 087 0873</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ViewTodayStyle>
  );
}

export default ViewedToday;
