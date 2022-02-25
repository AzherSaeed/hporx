import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MarketplaceImg, MarketSubHead, MarketSubHeadSecond, MarketTertiaryHeadMedium, MarketViewMoreBtn, MarkInnerContainer } from './StyledMarketPlace'
import marketplace from '../../assets/marketplace.svg'
import { PrimaryHeading, TertiaryHeadingSmall } from '../Globals/Globals'
import { MarketPlaceSlick } from './MarketPlaceSlick'
const Marketplace = () => {
  return (
    
    <Container >
        <MarkInnerContainer className='marketplace-inner'>
    <Row>
        <Col md={6}>
            <PrimaryHeading>MARKETPLACE</PrimaryHeading>
            <TertiaryHeadingSmall>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</TertiaryHeadingSmall>
            <MarketSubHead>HEALTH IS WEALTH</MarketSubHead>
            <MarketSubHeadSecond style={{color:'red'}}>“Great health is great wealth!”</MarketSubHeadSecond>
            <MarketTertiaryHeadMedium>Dr A. E De Mandeville</MarketTertiaryHeadMedium>
            <MarketViewMoreBtn>View More</MarketViewMoreBtn>
        </Col>
        <Col md={6}>
            <MarketplaceImg className='img-fluid' src={marketplace} alt={marketplace}/>
        </Col>
    </Row>
    <MarketPlaceSlick/>
    </MarkInnerContainer>
      </Container>
  )
}

export default Marketplace