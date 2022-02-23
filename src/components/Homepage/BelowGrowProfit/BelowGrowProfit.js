import React from 'react'
import belowprofit from '../../../assets/belowGrowProfit.svg'
import { BelowGrowProfitMainContainer, BelowGrowProfitImg, BelowGrowProfitImgContainer } from './StyledBelowProfit'
const BelowGrowProfit = () => {
  return (
    <BelowGrowProfitMainContainer>
      <h2>Controlled Environment Agriculture Manufacturers</h2>
        <BelowGrowProfitImgContainer>
        <BelowGrowProfitImg src={belowprofit} alt={belowprofit}/>
        </BelowGrowProfitImgContainer>
    </BelowGrowProfitMainContainer>
  )
}

export default BelowGrowProfit