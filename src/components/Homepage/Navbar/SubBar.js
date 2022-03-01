import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SubBarContainer } from "./StyledNavbar";
import { Link, animateScroll as scroll } from "react-scroll";
import {

  Link as ReactLink
} from "react-router-dom";
import './SubBar.css';


const SubBar = () => {
  return (
       <nav className="nav" id="navbar">
        <div className="nav-content">
 
          <ul className="nav-items">
            <li className="nav-item">
              <ReactLink
                activeClass="active"
                to="/home"
                spy={true}
                smooth={true}
                duration={500}
              > HOMES </ReactLink>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="INHALATE"
                spy={true}
                smooth={true}
                duration={500}
              >INHALATE</Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="VAPORIZE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >VAPORIZE</Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="PORTABLES"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >PORTABLES</Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="CHILLUMS"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >CHILLUMS</Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="CULTIVATE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >CULTIVATE</Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="DIAGNOSE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >DIAGNOSE </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="PRESCRIBE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >PRESCRIBE </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="MARKETPLACE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >MARKETPLACE </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="PRODUCTS"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >PRODUCTS </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="LOCATE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >LOCATE </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default SubBar;
