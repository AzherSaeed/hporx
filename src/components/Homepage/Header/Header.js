import React, { useState } from "react";
import playIcon from "../../../assets/play-btn.svg";
import {
  StyledHero,
  HeroHeading,
  HeroButton,
  HeroPlayIcon,
  HomePlayButtonContainer,
} from "./StyledHeader";
import TopBar from "../Navbar/TopBar";
import SubBar from "../Navbar/SubBar";
import OffCanvas from "../Navbar/OffCanvas";
import MyVerticallyCenteredModal from "./Modal";

import Popup from '../Popup/Popup';
import VideoModal from '../VideoModal/VideoModal'




const Header = ({ id, country, state }) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  
const data = localStorage.getItem("ageGateActive");

  const handleClose = () => setShow(false);

  return (
    <div>
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={
          data !== "active" ? (
            <Popup setModalShow={setModalShow} />
          ) : (
            <iframe
              width="100%"
              height="550px"
              src="https://www.youtube.com/embed/oJaO4JdFWB8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )
        }
      />
      <StyledHero id={id}>
        {/* <TopBar setShow={setShow} /> */}
        <OffCanvas
          country={country}
          state={state}
          handleClose={handleClose}
          show={show}
          setShow={setShow}
        />
 
     

      
      <SubBar setShow={setShow}  />
      <video className="hero-video" autoPlay loop src='/Videos/hporx.mp4' />
      <div className="hero-text-container">
        <HomePlayButtonContainer onClick={() => setModalShow(true)} >
          <HeroPlayIcon src={playIcon} />
        </HomePlayButtonContainer>
        <HeroHeading>THERAPEUTICS</HeroHeading>
        <p className="home-main-header-sub-heading" >CULITVATED WELLNESS</p>
        <HeroButton>Appointment</HeroButton>
      </div>
    </StyledHero>
    </div>
  );
};

export default Header;
