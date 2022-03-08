import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { StyleHeader } from "./StyleHeader";
import Select from "./Select";
import Search from '../../../assets/Search.svg';
import Flag1 from '../../../assets/Flag1.svg';
import Star1 from '../../../assets/Star1.svg';
import Like from '../../../assets/Like.svg';
import Card1img from '../../../assets/Card1img.svg';
import Card2img from '../../../assets/Card2img.svg';
import Card3img from '../../../assets/Card3img.svg';
import Card4img from '../../../assets/Card4img.svg';

function Header() {
    const arr=[Card2img,Card4img,Card2img,Card4img]
  return (
    <StyleHeader>
      <div className="header">
      <div className="container">
        <h1>LOCATE</h1>
        <h2>
          DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND LAWYERS
        </h2>
        <Form>
        <Row className="select-option align-items-center">
   
          <Col md={3} sm={6}>
            <Select label='Country' name='country' placeholder={'Choose country'} className="select"/>
          </Col>
          <Col md={3} sm={6}>
          <Select label='City' name='city' />
          </Col>
          <Col md={3} sm={6}>
          <Select label='Service' name='service' />
          </Col>
          <Col  md={3} sm={6}>
             <Button className="btn"><img src={Search} alt="Search icon" className="search-img"/> Search</Button>
          </Col>
        
         </Row>
         </Form>
        </div>
      </div>
   <div className="container">
       <Row>
       {arr.map((v)=>
           <Col  lg={3} md={6} sm={6}>
               <Card className="cards">
                <div className><img src={v}  className="img-section" alt="img"/> </div>
                <div className="card-data">
                    <h6>Advance Medical Associates PC...</h6>
                    <p className="para">Doctor & Medical Marijuana - Cannabis...</p>
                    <div className="d-flex pt-1 text1">
                        <div ><img src={Flag1} className="icon " alt="icon"/><span className="icon-text">USA</span></div>
                        <div ><img src={Star1} className="icon " alt="icon"/><span className="icon-text">0.0</span></div>
                        <div ><img src={Like} className="icon " alt="icon"/><span className="icon-text">Likes 0</span></div>
                    </div>
                    <div>
                        <input type='submit' className="locator-card-bt" name="See Details" value="See Details"/>
                    </div>
                </div>
               </Card>
           </Col>
       )}
       </Row>
   </div>
    </StyleHeader>
  );
}

export default Header;
