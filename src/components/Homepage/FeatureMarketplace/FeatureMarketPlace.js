import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FeatureHeading,MarketPlaceHeading, FeatureMarketPlaceBtn, FeatureMarketSub, FeatureMarketText, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'
import featureMark from '../../../assets/featureMarketplace.svg'
import { PrimaryHeading } from '../../Globals/Globals'

const FeatureMarketPlace = () => {
    return (
        <>
            <Container>
                <FeatureMarketText>
                    <MarketPlaceHeading>FEATURED MARKETPLACE PRODUCTS</MarketPlaceHeading>
                    <FeatureMarketSub>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</FeatureMarketSub>
                </FeatureMarketText>
            </Container>
            <FeatureMarkMain>

                <Container fluid>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <FeatureMarkImg src={featureMark} alt={featureMark} />
                            </Col>
                            <Col lg={6}>
                                <FeatureMarkTextContainer>
                                    <FeatureHeading>Marketplace Vendors</FeatureHeading>
                                    <FeatureSubHeading>All products featured are available from select marketplace vendors, please search or select the product category you require</FeatureSubHeading>
                                    <FeatureMarketPlaceBtn>View More</FeatureMarketPlaceBtn>
                                </FeatureMarkTextContainer>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </FeatureMarkMain>
        </>

    )
}

export default FeatureMarketPlace