import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { StatisticsImg, StatisticsImgContainer, StatisticsMainContainer, StatisticsTextContainer } from './StyledStatistics'
import static1 from '../../../assets/static1.svg'
import static2 from '../../../assets/static2.svg'
import static3 from '../../../assets/static3.svg'
import static4 from '../../../assets/static4.svg'
import static5 from '../../../assets/static5.svg'
import { BsFillStarFill } from "react-icons/bs";
import { PrimaryHeading } from '../../Globals/Globals'

const Statistics = () => {
    const cards = [{
        image: static1,
        revenue: '4.2',
        mini: 'Trillion',


        p1: 'Medical marijuana',
        p2: 'Industry Valuation',
    }, {
        image: static2,
        revenue: '67',
        mini: '',
        p1: 'Awarded Licenses in',
        p2: 'fourtenses in fourtenn status',
    }, {
        image: static3,
        revenue: '4,781',
        mini: '',

        p1: 'Thousand ft2 of',
        p2: 'cultivation space builtv',
    }, {
        image: static4,
        revenue: '150t',
        mini: '',

        p1: 'Tons od solids',
        p2: 'produced',
    }, {
        image: static5,
        revenue: '400%',
        mini: '',

        p1: 'Perfect Growth in the',
        p2: ' last tow years',
    },]
    return (
        <StatisticsMainContainer>
            <Container>
                <PrimaryHeading>Statistics</PrimaryHeading>
                <Row className=' p-0 '>
                    {
                        cards.map((data, index) => {
                            const { image,
                                revenue,
                                p1,
                                p2, mini } = data;
                            return (
                                <div className='p-3 col-lg col-md-4 col-sm-6 col-xs-12' key={index}>

                                    <Card className='card-container'>

                                        <StatisticsImgContainer>

                                            <StatisticsImg src={image} alt={image} />
                                        </StatisticsImgContainer>
                                        <StatisticsTextContainer>
                                            <div className="d-flex align-items-center">
                                                <h3 >{revenue}

                                                </h3>
                                                <div className='d-flex flex-column ml-5'>
                                                    <span className='icon' > {
                                                        index === 0 ? <BsFillStarFill   /> : null
                                                    }</span>
                                                    <span className='mini'>{mini}</span>
                                                </div>

                                            </div>
                                            <p className="mb-2">{p1}</p>
                                            <p class>
                                                {p2}
                                            </p>
                                        </StatisticsTextContainer>

                                    </Card>

                                </div>
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