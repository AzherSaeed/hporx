import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PortableImg1, PortableImg1Container, PortableMainContainer, PortableMoreBtn } from './PortableStyles'
import portable from '../../../assets/portable.jpg'
import PortableSlick from './PortableSlick'
import {PrimaryHeading } from '../../Globals/Globals'
import PlayBtn from '../../Globals/PlayBtn'


const Portable = ({id}) => {
    return (
        <PortableMainContainer>
            <Container id={id} >
                <Row>
                    <Col xs={12} md={6}>
                        <PrimaryHeading>Portable</PrimaryHeading>
                        <p>"You can take it with you"</p>
                        <p className='mini-title'>Under Legal prescription</p>
                        <PortableMoreBtn>View More</PortableMoreBtn>
                        <PortableSlick />
                    </Col>
                    <Col xs={12} md={6}>
                        <PortableImg1Container>
                        
                            <div className='inner-overlay'>
                                <PlayBtn/>
                            </div>
                            <PortableImg1 className='img-fluid' src={portable} alt={portable} />
                        </PortableImg1Container>
                    </Col>

                </Row>
            </Container>
        </PortableMainContainer>
    )
}

export default Portable