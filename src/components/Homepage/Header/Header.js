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
const apiKey = "AIzaSyCPaxhUQwzWzvTyFp_ao6vGMhUnu8qy4dI";
  const handleClose = () => setShow(false);
  const getValue=(value)=>{
    console.log(value,'value')
    setOffNavValue(value);

  }

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`)
   .then(response => response.json())
   .then(result => {
    setState(result.results[0].address_components[7].long_name);
    setCountry(result.results[0].address_components[8].long_name);
   })
   .catch(error => {
     console.error('Error:', error);
   });
   } , [lat , lng])


  return (
    <div>
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
        children={
          data !== "active" ? (
            <Popup setModalShow={setModalShow} country={country} state={state} />
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
        <p className="home-main-header-sub-heading" >CULTIVATED WELLNESS</p>
        <HeroButton>Appointment</HeroButton>
      </div>
    </StyledHero>
    </div>
  );
};

export default Header;
