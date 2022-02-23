import React from 'react'
import belowprofit from '../../../assets/belowGrowProfit.svg'
import { BelowGrowProfitContainer, BelowGrowProfitImg, BelowGrowProfitImgContainer } from './StyledBelowProfit'
const BelowGrowProfit = () => {
  return (
    <BelowGrowProfitContainer>
        <BelowGrowProfitImgContainer>
        <BelowGrowProfitImg src={belowprofit} alt={belowprofit}/>
        </BelowGrowProfitImgContainer>
    </BelowGrowProfitContainer>
  )
}

export default BelowGrowProfit