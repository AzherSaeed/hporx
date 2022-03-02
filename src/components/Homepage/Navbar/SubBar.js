import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SubBarContainer } from "./StyledNavbar";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory} from "react-router-dom";
import './SubBar.css';
import TopBar from '../Navbar/TopBar';
import Marquee from './Marquee';


const SubBar = ({setShow}) => {
  const history = useHistory()

  
  const [navbar, setNavbar] = useState(false)



  const [navbarbackground, setnavbarbackground] = useState(false)


  useEffect(() => {
    changenavColor()
    // adding the event when scroll change background
    window.addEventListener("scroll", changenavColor)
  })



  const changenavColor = () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      setnavbarbackground(true)
    } else {
      setnavbarbackground(false)
    }
  }











  const changeBackground = () => {
    window.onwheel = e => {
      if(e.deltaY >= 0){
        // Scrolling Down with mouse
        setNavbar(true)
      } else {
        // Scrolling Up with mouse
        setNavbar(false)
      }
    }
  }


    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
  return (
    <div>
      <Marquee/>
      <TopBar setShow={setShow}  />

      <div className={navbar ? 'hporx-header' : 'hporx-header-skew'}  >
      <div className={navbar ? 'hporx-header-topbar-skew' : navbarbackground ? 'changetopBArbackgournd' : 'hporx-header-topbar-normal'} >
      </div>
       <nav className={navbarbackground ? 'nav' : 'changebackground'} id="navbar">
      <div className="nav-content">

        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="HOME"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => history.push('/home')}
            > HOME </Link>
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
  </div>
    </div>
  );
};

export default SubBar;
