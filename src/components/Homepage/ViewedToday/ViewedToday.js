import React from 'react';
import {ViewTodayStyle} from './StyleViewToday'
import ViewToday from '../../../assets/ViewToday.svg';
import { Card, Col, Row } from 'react-bootstrap';

function ViewedToday(){
    return(
    <ViewTodayStyle>
    <div className='container'>
                <div className='main-heading'>Everything you viewed today</div>
       <Row className='mt-5 justify-content-center '>
       { [...Array(3)].map((_, index) =>
           <Col key={index}  sm={6} lg={4}>
             <Card className='card'>
                 <Col className='d-flex ' >
                 <img src={ViewToday} alt='Everything view today image'/>
                 <div className='right-block'>
                     <h2>Fairman Online</h2>
                     <p>Hempz Pomegranate Herbal Body Moisturizer,</p>
                     <h4>From $ 35</h4>
                 </div>
                 </Col> 
              </Card>
           </Col>
                 )
                 }     
       </Row>
    </div>
    </ViewTodayStyle>);
}

export default ViewedToday;
