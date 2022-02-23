import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import growProfit from '../../../assets/growProfit.svg'
import {GrowProfitImg, GrowProfitSlickContainer} from './StyledGrowProfit';

const GrowProfitCard = () => {
  return (
    <div>
                <GrowProfitSlickContainer className='d-flex align-items-center'>
                    <Row className='align-items-center ps-5'>
                        <Col lg={6}>
                            <Container>
                                <h2>GROW YOUR OWN PROFITS</h2>
                                <p>Are you located in a country, region, or state in which cannabis and marijuana consumption has been decriminalizedand regulated by law? A Cannabis Association? A marijuana Club? A Pharmacist Serving a Small Rural Population? licensed therapeutic herbalist? A rural doctor? Can you prescribe medical-grade extract or flower from Cannabaceae family grown in a laboratory standard contained environment agriculture? Alternatively, if you are a self-starter, higher achiever and you are gifted with entrepreneurialskill </p>
                                <h2>$35000</h2>
                            </Container>
                        </Col>
                        <Col lg={6}>
                            <GrowProfitImg src={growProfit} alt={growProfit} />
                        </Col>

                    </Row>

                </GrowProfitSlickContainer>
            </div>
  )
}

export default GrowProfitCard