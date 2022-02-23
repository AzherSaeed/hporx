import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PortableImg1, PortableMainContainer } from './PortableStyles'

import portables from '../../../assets/portable.svg'
import PortableSlick from './PortableSlick'
import { ViewMoreBtn } from '../../Globals/Globals'


const Portable = () => {
    return (
        <PortableMainContainer>
            <Container>
                <Row className='d-flex  justify-content-between '>
                    <Col xs={12} md={4}>
                        <PortableImg1 src={portables} />
                    </Col>
                    <Col xs={12} md={8}>
                        <h2>Portable</h2>
                        <p>You can take it with you!</p>
                        <p className='mini-title'>Under Legal prescription</p>
                        <ViewMoreBtn>View More</ViewMoreBtn>
                        <PortableSlick />
                    </Col>
                </Row>
            </Container>
        </PortableMainContainer>
    )
}

export default Portable