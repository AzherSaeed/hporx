import React from "react";
import { StyleTrending } from "./StyleTrendingNow";
import TrendingNows from '../../../assets/TrendingNows.svg';
import { Card, Col, Row } from "react-bootstrap";

function TrendingNow(){
    return(
    <StyleTrending>
            <div className="container">
             <h1 className='main-heading'>Trending Now</h1>
               <Row className="mt-5">
               {[...Array(4)].map((_,index)=>
                   <Col className="d-inline-block">
                  
                        <h5 className="outside-card-text">Fairman Online</h5>
                          <Card>
                            <div className="card-body">
                                <img src={TrendingNows} alt="Trending Now Image"/>
                                <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                                <h4>From $ 35</h4>
                            </div>
                          </Card>  
                   </Col>
                   )}
               </Row>
            </div>
    </StyleTrending>)
}
export default TrendingNow;