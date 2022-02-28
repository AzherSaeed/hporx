import React, { useState } from "react";
import playIcon from "../../../assets/play-btn.svg";
import {
  StyledHero,
  HeroHeading,
  HeroButton,
  HeroPlayIcon,
  HomePlayButtonContainer
} from "./StyledHeader";
import TopBar from "../Navbar/TopBar";
import SubBar from "../Navbar/SubBar";
import OffCanvas from "../Navbar/OffCanvas";


const Header = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <StyledHero id={id} >
      <TopBar setShow={setShow} />
      <OffCanvas handleClose={handleClose} show={show}  setShow={setShow}/>
      <SubBar />
      <div className="hero-text-container">
        <HomePlayButtonContainer >
          <HeroPlayIcon src={playIcon} />
        </HomePlayButtonContainer>
        <HeroHeading>THERAPEUTICS</HeroHeading>
        <HeroButton>Appointment</HeroButton>
      </div>
    </StyledHero>
  );
};

export default Header;
