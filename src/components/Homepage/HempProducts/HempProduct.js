import React from "react";
import{Card, Row,Col} from 'react-bootstrap';
import { StyleHemp } from "./StyleHempProduct";
import HempHeadingIcon from '../../../assets/HempHeadingIcon.svg';
import HempCardIcon from '../../../assets/HempCardIcon.svg';
function HempProduct(){

    return(
    <StyleHemp> 
          <div className="container p-5">
          <h1 className="text-center"><span><img src={HempHeadingIcon} className="imgHeading"/></span>HEMP PRODUCTS ONLINE</h1> 
         <Row className="g-2">
         { [...Array(7)].map((_, index) =>
             <Col key={index}>
                 <Card className="cards">
                    <div className="text-center card-body">
                        <img src={HempCardIcon} className="IconImage" alt="Icon-image"/>
                        <h2>Categories 1</h2>
                    </div>
                 </Card>
             </Col>
         )
         }
         </Row>   
         <Row className="mt-2 g-2">
         { [...Array(7)].map((_, index) =>
             <Col key={index}>
                 <Card className="cards">
                    <div className="text-center card-body">
                        <img src={HempCardIcon} className="IconImage" alt="Icon-image"/>
                        <h2>Categories 1</h2>
                    </div>
                 </Card>
             </Col>
         )
         }
         </Row> 
         <Row className="g-5 mt-2">
         { [...Array(3)].map((_, index) =>
             <Col>
             <Card className="box"> </Card>
             </Col>)}
         </Row>
          </div>
    </StyleHemp>);
}

export default HempProduct;