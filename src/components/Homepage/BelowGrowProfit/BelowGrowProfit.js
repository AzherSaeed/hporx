import React from 'react'
import { Container } from 'react-bootstrap'
import belowprofit from '../../../assets/belowGrowProfit.svg'
import { BelowGrowProfitMainContainer, BelowGrowProfitImg, BelowGrowProfitImgContainer } from './StyledBelowProfit'
import playButton from "../../../assets/play-outline-button.svg";
const BelowGrowProfit = () => {
  return (
    <BelowGrowProfitMainContainer>
      <Container>
        <h2>Controlled Environment Agriculture Manufacturers</h2>
      </Container>
      <BelowGrowProfitImgContainer>

       
        <div className="inner-overlay">
          <div className="inner-overlay-content">
            <img className='play-img' src={playButton} alt="playButton" />
          
          </div>
        </div>
        <BelowGrowProfitImg src={belowprofit} alt={belowprofit} />
      </BelowGrowProfitImgContainer>
    </BelowGrowProfitMainContainer>
  )
}

export default BelowGrowProfit