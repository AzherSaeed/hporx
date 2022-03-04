import React from "react";
import arrowGrowth from "../../../assets/arrow-growth-svgrepo-com 1.png";
import image7 from "../../../assets/image 7.png";
import shield1 from "../../../assets/shield-svgrepo-com 1.png";
import support1 from "../../../assets/support-svgrepo-com 1.png";
import image8 from "../../../assets/image 8.png";

import "./Agency.css";
import { AgencyMainContainer, DesignIQContainer } from "./StyledAgency";
const Agency = () => {
  return (
    <AgencyMainContainer>
      <div className="container agency mt-8-4">
        <div className="row justify-content-center my-4 ">
          <div className=" col-11 col-lg-6 mb-4 mb-lg-0 position-relative">
            <img width="100%" height="100%" src={image7} alt="image7" />
          </div>
          <div className=" col-11 col-lg-6 px-3  ">
            <h1 className="h1">We're Surprisingly Amazing</h1>
            <p className="first-para">
              Sem integer urna dictumst aliquam. Maecenas cum feugiat vestibulum
              diam quisque sit adipiscing congue. Vitae quam mattis nunc
              interdum.Maecenas cum feugiat vestibulum diam{" "}
            </p>
            <div className="d-flex justify-content-start align-items-start mt2rem">
              <div className="me-2">
                <img src={arrowGrowth} alt="agency" />
              </div>
              <div>
                <h3 className="h3">Fast & Reliable Dealings</h3>
                <p className="pb-0 opacity80 font14">
                  Sem integer urna dictumst aliquam. Maecenas cum feugiat
                  vestibulum diam quisque sit adipiscing congue. Vitae quam
                  mattis nunc interdum.Maecenas cum feugiat vestibulum diam{" "}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-start mt2rem">
              <div className="me-2">
                <img src={shield1} alt="agency" />
              </div>
              <div>
                <h3 className="h3">Fast & Reliable Dealings</h3>
                <p className="opacity80 font14">
                  Sem integer urna dictumst aliquam. congue. Vitae quam mattis
                  nunc interdum.Maecenas cum feugiat vestibulum diam{" "}
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-start align-items-start mt2rem">
              <div className="me-2">
                <img src={support1} alt="agency" />
              </div>
              <div>
                <h3 className="h3">Live chat support 24/7 Available</h3>
                <p className="opacity80 font14">
                  Sem integer urna dictumst aliquam. Maecenas cum feugiat
                  vestibulum diam quisque sit adipiscing{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center mt-8-7">Design iQ</h1>
        <div className="row my-4 justify-content-center">
          <div className="col">
            <img src={image8} alt="agency" width="100%" />
          </div>
        </div>
      </div>
    </AgencyMainContainer>
  );
};

export default Agency;
