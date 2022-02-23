import React from 'react'
import { Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap'
import { NewLetterHeading, NewsLetterImg, NewsLetterMainContianer, SubscribeButton } from './StyledNewsLetter'
import newletterImg from '../../../assets/newsLetter.svg'
import Select from '../Select/Select'
const SubscribeNewsletter = () => {
    return (
        <NewsLetterMainContianer>
            <Container>


                <Row className='justify-content-between' >
                    <NewLetterHeading>
                        Subscribe to our newsletter
                    </NewLetterHeading>

                    <Col lg={6}>
                        <Row>
                            <Col md={6}>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                    placeholder='Enter first Name'
                                    aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='Enter last Name'aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={12} className='my-4'>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='Enter your Email'aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={6} >
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='Phone number'aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='Invite Friend'
                                     aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={12} className='my-4'>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='Enter City 'aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={12}>
                                <InputGroup size="lg">
                                    <FormControl className='py-3' aria-label="Large" 
                                     placeholder='How may I help You'aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                            </Col>
                            <Col md={12}>
                                <Select />
                            </Col>
                          
                        </Row>
                        <SubscribeButton>
                            Subscribe
                        </SubscribeButton>
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