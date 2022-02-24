import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {NewsLetterImg, NewsLetterMainContianer, SubscribeButton } from './StyledNewsLetter'
import newletterImg from '../../../assets/newsLetter.svg'
import Select from '../Select/Select'
import InputField from './InputField'
const SubscribeNewsletter = () => {
    return (
        <NewsLetterMainContianer>
            <Container>
                <Row >
                    <h3>
                        Subscribe to our newsletter
                    </h3>
                    <Col lg={6}>
                        <Row>
                            <Col md={6}>
                                <InputField placeholder='Enter first Name' type='text' />
                            </Col>
                            <Col md={6}>
                                <InputField placeholder='Enter Last Name' type='text' />

                            </Col>
                            <Col md={12} className='my-4'>
                                <InputField placeholder='Enter Your Email' type='email' />

                            </Col>
                            <Col md={6} >
                                <InputField placeholder='Phone Name' type='phone' />

                            </Col>
                            <Col md={6}>

                                <InputField placeholder='Invite Friend' type='text' />

                            </Col>
                            <Col md={12} className='my-4'>
                                <InputField placeholder='Enter City' type='text' />

                            </Col>
                            <Col md={12}>
                                <InputField placeholder='How may I help You' type='text' />

                            </Col>
                            <Col md={12}>
                                <Select />
                            </Col>
                        {/* <SubscribeButton>
                            Subscribe
                        </SubscribeButton> */}

                        </Row>
                    </Col>
                    <Col lg={5}>
                        <NewsLetterImg src={newletterImg} alt={newletterImg} />
                    </Col>

                </Row>
            </Container>
        </NewsLetterMainContianer>
    )
}

export default SubscribeNewsletter