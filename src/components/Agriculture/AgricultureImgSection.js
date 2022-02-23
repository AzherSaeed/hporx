import React from 'react'
import { Col,Row } from 'react-bootstrap';
import agri1 from '../../assets/agri1.svg';
import agri2 from '../../assets/agri2.svg';
import agri3 from '../../assets/agri3.svg';
import agri4 from '../../assets/agri4.svg';
import agri5 from '../../assets/agri5.svg';
import {AgricultureImg,AgricultureImg1 } from './StyledAgriculture';

const AgricultureImgSection = () => {
    return (
            <div className='p-0'>
                <Row className='d-flex p-0'>
                    <Col  className='p-0' lg={6} >
                        <Row>
                            <Col className='p-0'  lg={6}><AgricultureImg src={agri1} alt={agri1} /></Col>
                            <Col className='p-0'  lg={6}><AgricultureImg src={agri2} alt={agri2} /></Col>
                            <Col className='p-0'  lg={6}><AgricultureImg src={agri4} alt={agri4} /></Col>
                            <Col className='p-0'  lg={6}><AgricultureImg src={agri5} alt={agri5} /></Col>
                        </Row>
                    </Col>
                    <Col className='p-0'  lg={6}>
                        <AgricultureImg1 src={agri3} alt={agri3} />
                    </Col>
                </Row>
            </div>
       
    )
}

export default AgricultureImgSection