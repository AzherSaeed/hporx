import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { StatisticsImg, StatisticsImgContainer, StatisticsMainContainer, StatisticsTextContainer } from './StyledStatistics'
import static1 from '../../../assets/static1.svg'
import static2 from '../../../assets/static2.svg'
import static3 from '../../../assets/static3.svg'
import static4 from '../../../assets/static4.svg'
import static5 from '../../../assets/static5.svg'

const Statistics = () => {
    const cards = [{
        image: static1,
        revenue: '$167Billion',
        p1: 'Medical marijuana',
        p2: 'Industry Valuation',
    }, {
        image: static2,
        revenue: '67',
        p1: 'Awarded Licenses in',
        p2: 'fourtenses in fourtenn status',
    }, {
        image: static3,
        revenue: '4,781',
        p1: 'Thousand ft2 of',
        p2: 'cultivation space builtv',
    }, {
        image: static4,
        revenue: '150t',
        p1: 'Tons od solids',
        p2: 'produced',
    }, {
        image: static5,
        revenue: '397%',
        p1: 'Perfect Growth in the',
        p2: ' last tow years',
    },]
    return (
        <StatisticsMainContainer>
            <Container>
            <h1>Statistics</h1>
                <Row className='gap-3'>
                    {
                        cards.map((data, index) => {
                            const { image,
                                revenue,
                                p1,
                                p2 } = data;
                            return (
                                <Col lg={2} md={3} sm={5} xs={12}   key={index}>
                                    <Card className='card-container'>
                                        <Card.Body>
                                            <StatisticsImgContainer>
                                                <StatisticsImg src={image} alt={image} />
                                            </StatisticsImgContainer>
                                            <StatisticsTextContainer>
                                            <Card.Title className='fs-2'>{revenue}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{p1}</Card.Subtitle>
                                            <Card.Text>
                                                {p2}
                                            </Card.Text>
                                            </StatisticsTextContainer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </Container >
        </StatisticsMainContainer>
    )
}

export default Statistics