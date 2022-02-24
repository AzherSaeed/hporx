import React from 'react'
import { Col, Row } from 'react-bootstrap';
import agri1 from '../../../assets/agri1.svg';
import agri2 from '../../../assets/agri2.svg';
import agri3 from '../../../assets/agri3.svg';
import agri4 from '../../../assets/agri4.svg';
import agri5 from '../../../assets/agri5.svg';
import { AgriculteImgsSection, AgricultureImg, AgricultureImg1, AgricultureImgContainer } from './StyledAgriculture';

const AgricultureImgSection = () => {
    return (
        <AgriculteImgsSection>
            <AgricultureImgContainer>
                <Row>
                    <Col  md={4}><AgricultureImg className='img-fluid' src={agri5} alt={agri5} /></Col>
                    <Col md={4}><AgricultureImg className='img-fluid' src={agri2} alt={agri2} /></Col>
                    <Col md={4}>
                        <AgricultureImg className='img-fluid' src={agri3} alt={agri3} />
                    </Col>
                </Row>
            </AgricultureImgContainer>
            <AgricultureImgContainer className='mt-4'>
                <Row>
                    <Col md={4}><AgricultureImg className='img-fluid' src={agri4} alt={agri4} /></Col>
                    <Col md={8}><AgricultureImg1 className='img-fluid' src={agri1} alt={agri1} /></Col>
                </Row>
            </AgricultureImgContainer>
        </AgriculteImgsSection>


    )
}

export default AgricultureImgSection