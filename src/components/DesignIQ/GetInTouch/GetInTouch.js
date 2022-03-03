import React from 'react'
import InputField from '../../Homepage/SubscribeNewsletter/InputField'
import { GetInTouchImg, GetInTouchInner, GetInTouchMain } from './StyledGetInTouch'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import Select from '../../Homepage/Select/Select'
import { SubscribeButton } from '../../Homepage/SubscribeNewsletter/StyledNewsLetter'
import getIn from '../../../assets/getInTouch.png'


const GetInTouch = () => {
    return (
        <Container>
            <GetInTouchMain>
                <h3>
                    Have any Query Get In Touch!
                </h3>
                <GetInTouchInner>
                    <Row className='justify-content-between align-items-center'>
                        <Col lg={7}>
                            <Col md={12}>
                                <Select title='How did you find us?' />
                            </Col>
                            <Row className='align-items-center '>
                                <Col md={6}>
                                    <InputField placeholder='Enter Your Name' type='text' label='Name' />
                                </Col>
                                <Col md={6}>
                                    <InputField placeholder='Enter Your Email' type='text' label='Email' />

                                </Col>
                                <Col md={6} >
                                    <InputField placeholder='Enter Your Phone' type='phone' label='Phone' />

                                </Col>
                                <Col md={6} >
                                    <InputField placeholder='Enter Your Subject' type='text' label='Subject' />

                                </Col>


                                <Col md={12}>
                                    <label className='message-label' htmlFor="message">Message</label>
                                    <br />
                                    <FloatingLabel controlId="floatingTextarea2" className='mt-1  '>
                                        
                                        <Form.Control
                                            as="textarea" 
                                            placeholder="Message"
                                            className='message-input'
                                            style={{ height: '16.6rem',  }}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <div>

                                    <SubscribeButton>
                                        Send
                                    </SubscribeButton>
                                </div>

                            </Row>
                        </Col>
                        <Col lg={5}>
                            <GetInTouchImg src={getIn} alt={getIn} />
                        </Col>
                    </Row>
                </GetInTouchInner>
            </GetInTouchMain>
        </Container>
    )
}

export default GetInTouch