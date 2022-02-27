import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NewsLetterImg, NewsLetterMainContianer, SubscribeButton } from './StyledNewsLetter'
import newletterImg from '../../../assets/newsLetter.svg'
import Select from '../Select/Select'
import InputField from './InputField'
import { SubHeading } from '../../Globals/Globals'
const SubscribeNewsletter = () => {
    return (
        <NewsLetterMainContianer>
            <Container>
                <Row className='justify-content-between'>
                    <SubHeading>
                        Subscribe
                    </SubHeading>
                    <Col lg={7}>
                        <Row className='align-items-center '>
                            <Col md={6}>
                                <InputField placeholder='Enter first Name' type='text' label='First Name' />
                            </Col>
                            <Col md={6}>
                                <InputField placeholder='Enter Last Name' type='text' label='Last Name' />

                            </Col>
                            <Col md={6} >
                                <InputField placeholder='Enter Your Email' type='email' label='Email' />

                            </Col>
                            <Col md={6} >
                                <InputField placeholder='Phone Name' type='phone' label='Mobile Number' />

                            </Col>
                            <Col md={6}>

                                <InputField placeholder='Invite Friend' type='text' label='Invite Friend' />

                            </Col>
                            <Col md={6} >
                                <InputField placeholder='Enter City' type='text' label='City' />

                            </Col>

                            <Col md={12}>
                                <Select title='How can we be of service to you?'/>
                            </Col>
                            <Col md={12}>
                                <Select title='How can we be of service to you?'/>
                            </Col>
                            <SubscribeButton>
                                Subscribe
                            </SubscribeButton>

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