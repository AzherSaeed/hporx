import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import prescribe from '../../../assets/prescribe.svg'
import prescribe1 from '../../../assets/prescribe1.svg'
import prescribe2 from '../../../assets/prescribe2.svg'
import prescribe3 from '../../../assets/prescribe3.svg'
import { PrescribeHeading, PrescribeMainContainer, PrescribeImg, PrescribeImgContainer, PrescribeSubHeading, PrescribeButton } from './StyledPrescribe';


const Prescribe = () => {

    return (
        <PrescribeMainContainer>
            <Container>
                <Row className='justify-content-between'>
                    <Col md={4}>
                        <PrescribeImg src={prescribe} alt={prescribe} />
                    </Col>
                    <Col md={4}>
                        <PrescribeHeading>Prescribe</PrescribeHeading>
                        <PrescribeSubHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat officiis libero et eaque repellat? Distinctio nulla consequuntur placeat eum nesciunt velit qui deleniti aliquid?</PrescribeSubHeading>
                        <PrescribeButton>View more</PrescribeButton>
                    </Col>
                </Row>
            </Container>
            <div className='mt-4'>
                <Container >

                    <Row>
                        <Col md={4}>
                            <PrescribeImgContainer>
                                <PrescribeImg src={prescribe1} alt={prescribe1} />
                            </PrescribeImgContainer>
                        </Col>
                        <Col md={4}>
                            <PrescribeImgContainer>
                                <PrescribeImg src={prescribe2} alt={prescribe2} />
                            </PrescribeImgContainer>
                        </Col>
                        <Col md={4}>
                            <PrescribeImgContainer>
                                <PrescribeImg src={prescribe3} alt={prescribe3} />
                            </PrescribeImgContainer>
                        </Col>
                    </Row>

                </Container>
            </div>

        </PrescribeMainContainer >
    )
}

export default Prescribe