import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SubBarContainer } from "./StyledNavbar";

const SubBar = () => {
  return (
    <div class="third-bar">
            <div class="container">
            <nav class="navbar">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">INHALATE</a></li>
                    <li><a href="#">VAPORIZE</a></li>
                    <li><a href="#">PORTABLES</a></li>
                    <li><a href="#">CHILLUMS</a></li>
                    <li><a href="#">CULTIVATE <i class="fas fa-angle-down"></i></a>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Services <i class="fas fa-angle-right"></i></a>
                                <ul>
                                    <li><a href="#">Page1</a></li>
                                    <li><a href="#">Page2</a></li>
                                    <li><a href="#">Page3</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                    <li><a href="#">DIAGNOSE </a></li>
                    <li><a href="#">PRESCRIBE <i class="fas fa-angle-down"></i></a>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </li>
                    <li><a href="#">MARKETPLACE <i class="fas fa-angle-down"></i></a>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </li>
                    <li><a href="#">PRODUCTS <i class="fas fa-angle-down"></i></a>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </li>
                    <li><a href="#">LOCATE</a></li>
                </ul>
            </nav>
            </div>
        </div>

  );
};

export default SubBar;
