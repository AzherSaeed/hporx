import React, { useState , useEffect } from "react";
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




const Header = ({ id  ,value}) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [offNavValue, setOffNavValue] = React.useState(false);
  console.log({offNavValue})
const data = localStorage.getItem("ageGateActive");

  const handleClose = () => setShow(false);
  const getValue=(value)=>{
    console.log(value,'value')
    setOffNavValue(value);

  }

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((response) => {
        setCountry(response.country);
        setState(response.regionName);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);


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
          sendValue={getValue}
          value={value}
        /> 
      <SubBar setShow={setShow}  />
      <video autoPlay muted loop className="hero-video"  src='/Videos/hporx.mp4' />
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
