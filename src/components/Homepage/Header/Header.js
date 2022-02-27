import React, { useState } from "react";
import playIcon from "../../../assets/play-btn.svg";
import {
  StyledHero,
  HeroHeading,
  HeroButton,
  HeroPlayIcon,
} from "./StyledHeader";
import TopBar from "../Navbar/TopBar";
import SubBar from "../Navbar/SubBar";
import OffCanvas from "../Navbar/OffCanvas";


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <StyledHero>
      <TopBar setShow={setShow} />
      <OffCanvas handleClose={handleClose} show={show}  setShow={setShow}/>
      <SubBar />
      <div className="hero-text-container">
        <HeroPlayIcon src={playIcon} />
        <HeroHeading>THERAPEUTICS</HeroHeading>
        <HeroButton>Appointment</HeroButton>
      </div>
    </StyledHero>
  );
};

export default Header;
