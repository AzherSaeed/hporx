import React from 'react'
import { Container } from 'react-bootstrap'
import belowprofit from '../../../assets/belowGrowProfit.svg'
import { BelowGrowProfitMainContainer, BelowGrowProfitImg, BelowGrowProfitImgContainer } from './StyledBelowProfit'
const BelowGrowProfit = () => {
  return (
    <BelowGrowProfitMainContainer>
      <Container>
      <h2>Controlled Environment Agriculture Manufacturers</h2>
      </Container>
        <BelowGrowProfitImgContainer>
        <BelowGrowProfitImg src={belowprofit} alt={belowprofit}/>
        </BelowGrowProfitImgContainer>
    </BelowGrowProfitMainContainer>
  )
}

export default BelowGrowProfit