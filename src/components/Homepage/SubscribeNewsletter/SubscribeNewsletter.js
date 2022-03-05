import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NewsLetterImg, NewsLetterMainContianer, SubscribeButton } from './StyledNewsLetter'
import newletterImg from '../../../assets/newsLetter.svg'
import Select from '../Select/Select'
import InputField from './InputField'
import { SubHeading } from '../../Globals/Globals'
import {Formik,Form} from 'formik';
import *as Yup from 'yup';
const SubscribeNewsletter = () => {
    
    const validate=Yup.object( {
        firstName:Yup.string().max(15,"Must be 15 character or less").required("Required"),
        lastName:Yup.string().max(20,"Must be 20 character or less").required("Required"),
        email:Yup.string().email("You have entered invalid email").required("Required"),
        phone:Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').min(10, "to short").max(10, "to long").required("Required"),
        inviteFriend:Yup.string().max(15,"Must be 15 character or less").required("Required"),
        city:Yup.string().min(5,"Must be 5 character or more").required("Required"),
        service:Yup.string().required("Required"),
        service1:Yup.string().required("Required")
    });  
    return (
        <NewsLetterMainContianer>
            <Container>
                <Row className='justify-content-between'>
                    <h1>
                        Subscribe
                    </h1>
                    <Formik initialValues={{
                      firstName :'',
                      lastName:'',
                      email:'',
                      phone:'',
                      inviteFriend:'',
                      city:'',
                      service:'',
                      service1:''
                    }}
                    validationSchema={validate}
                    
                    onSubmit={values=>{
                        console.log(values);
                    }}>
                     {formik =>(
                    <Col lg={7}>
                    <Form>
                        <Row className='align-items-center '>
                            <Col md={6}>
                                <InputField name="firstName" placeholder='Enter first Name' type='text' label='First Name' />
                            </Col>
                            <Col md={6}>
                                <InputField name="lastName" placeholder='Enter Last Name' type='text' label='Last Name' />

                            </Col>
                            <Col md={6} >
                                <InputField name="email" placeholder='Enter Your Email' type='email' label='Email' />

                            </Col>
                            <Col md={6} >
                                <InputField name="phone" placeholder='Phone Name' type='phone' label='Mobile Number' />

                            </Col>
                            <Col md={6}>

                                <InputField name="inviteFriend" placeholder='Invite Friend' type='text' label='Invite Friend' />

                            </Col>
                            <Col md={6} >
                                <InputField name='city' placeholder='Enter City' type='text' label='City' />

                            </Col>

                            <Col md={12}>
                                <Select required name="service" title='How can we be of service to you?'/>
                            </Col>
                            <Col md={12}>
                                <Select required name="service1" title='How can we be of service to you?'/>
                            </Col>
                            <SubscribeButton type='submit'>
                                Subscribe
                            </SubscribeButton>

                        </Row>
                    </Form>
                    </Col>
                    )}
                    </Formik>
                    <Col lg={5}>
                        <NewsLetterImg src={newletterImg} alt={newletterImg} />
                    </Col>
                </Row>
            </Container>
        </NewsLetterMainContianer>
    )
}

export default SubscribeNewsletter
