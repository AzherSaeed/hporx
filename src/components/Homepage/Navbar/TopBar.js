import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import cart from "../../../assets/cart.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import featherMenu from "../../../assets/Icon feather-menu.svg";
import warningIcon from "../../../assets/warning-icon.svg";
import {HeaderTopBar} from './StyledNavbar';

const TopBar = ({setShow}) => {
  return (
    <HeaderTopBar>
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img className="img-fluid header-topBar-logo"  src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#" className="topbar-nav-icon">
              <img className="img-fluid" src={warningIcon}  alt="featherMenu"/>
            </Nav.Link>
            <Nav.Link href="#" className="topbar-nav-icon">
              <img className="img-fluid" src={searchIcon}  alt="featherMenu"/>
            </Nav.Link>
            <Nav.Link href="#" className="topbar-nav-icon">
              <img className="img-fluid" src={profile}  alt="featherMenu" />
            </Nav.Link>
            <Nav.Link href="#" className="topbar-nav-icon">
              <img className="img-fluid" src={cart}  alt="featherMenu"/>
            </Nav.Link>
            <Nav.Link href="#" className="topbar-nav-icon">
              <img onClick={() => setShow(true) } className="img-fluid" src={featherMenu} alt="featherMenu" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </HeaderTopBar>
  );
};

export default TopBar;
