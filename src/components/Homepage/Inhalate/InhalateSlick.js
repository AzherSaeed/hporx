import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import inhalte1 from "../../../assets/inhalate3.jpg";
import inhalate4 from "../../../assets/inhalate4.jpg";
import playButton from "../../../assets/play-outline-button.svg";
import { InhalatedImgContainer, InhalteImg } from "./StyledInhalate";
import { ViewMoreBtn } from "../../Globals/Globals";
import "./style.css";
import VideoModal from "../VideoModal/VideoModal";
import Popup from '../Popup/Popup';


const InhalateSlick = () => {
  const imgContainer = [inhalte1, inhalate4, inhalte1, inhalate4];
  const [modalShow, setModalShow] = React.useState(false);

  const data = localStorage.getItem("ageGateActive");


  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="slick-main-div">
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={ data !== 'active' ? <Popup setModalShow={setModalShow}  /> : 
          <iframe
            width="100%"
            height="550px"
            src="https://www.youtube.com/embed/oJaO4JdFWB8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      />
      <Slider {...settings} className="responsive-slick">
        {imgContainer.map((img, index) => (
          <InhalatedImgContainer key={index}>
            <InhalteImg src={img} alt={img} />
            <div className="overlay"></div>
            <div className="inner-overlay">
              <div className="inner-overlay-content">
                <img
                  onClick={() => setModalShow(true)}
                  src={playButton}
                  alt="playButton"
                />
                <div>
                  <h3>Inhalate</h3>
                  <p>
                    Curabitur cursus sagittis varius. Quisque aliquet luctus
                    elit, in hendrerit orci malesuada eu.
                  </p>
                </div>
                <h2>$450</h2>
                <ViewMoreBtn>Shop Now</ViewMoreBtn>
              </div>
            </div>
          </InhalatedImgContainer>
        ))}
      </Slider>
    </div>
  );
};

export default InhalateSlick;
