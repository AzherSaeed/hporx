import React from 'react'
import { Col, Row } from 'react-bootstrap';
import agri1 from '../../../assets/agri1.svg';
import agri2 from '../../../assets/agri2.svg';
import agri3 from '../../../assets/agri3.svg';
import agri4 from '../../../assets/agri4.svg';
import agri5 from '../../../assets/agri5.svg';
import { AgriculteContainer, AgriculteContainer1, AgriculteImgsSection, AgricultureImg, AgricultureImg1, AgricultureImgContainer } from './StyledAgriculture';

const AgricultureImgSection = () => {
    const agriculture1 = [agri5, agri2, agri3]
    const agriculture2 = [agri4, agri2, agri1]
    return (
        <AgriculteImgsSection>
            <AgricultureImgContainer>
                <Row>
                    {
                        agriculture1.map((img, index) => (
                            <Col key={index} md={4}>
                                <AgriculteContainer>
                                    <AgricultureImg className='img-fluid' src={img} alt={img} />
                                    <div className="overlay">
                                    </div>
                                    <div className='inner-overlay'>
                                        <h3>TITLE HERE</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                                    </div>
                                </AgriculteContainer>
                            </Col>
                        ))
                    }

                </Row>
            </AgricultureImgContainer>
            <AgricultureImgContainer className='mt-4'>
                <Row>
                    <Col md={4}>
                        <AgriculteContainer1>
                            <AgricultureImg1 style={{height:"40.2rem !important"}} className='img-fluid' src={agri4} alt={agri4} />
                            <div className="overlay">
                            </div>
                            <div className='inner-overlay'>
                                <h3>TITLE HERE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            </div>
                        </AgriculteContainer1>
                    </Col>
                    <Col md={8}>
                        <AgriculteContainer>
                            <AgricultureImg className='img-fluid' src={agri1} alt={agri1} />
                            <div className="overlay">
                            </div>
                            <div className='inner-overlay'>
                                <h3>TITLE HERE</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            </div>
                        </AgriculteContainer>
                    </Col>
                </Row>
            </AgricultureImgContainer>
        </AgriculteImgsSection>


    )
}

export default AgricultureImgSection