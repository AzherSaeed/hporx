import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import featureMark from '../../../assets/featureMarketplace.svg'

import { FeatureHeading, FeatureMarketPlaceBtn, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'

const FeatureMarketContainer = () => {
    return (

        <Container fluid>
            <FeatureMarkMain>
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
            </FeatureMarkMain>
        </Container>
    )
}

export default FeatureMarketContainer