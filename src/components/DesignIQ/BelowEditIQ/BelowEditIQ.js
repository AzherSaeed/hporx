import React from 'react'
import { Container } from 'react-bootstrap'
import { BelowEditIQImg, BelowEditIQImgContainer, BelowEditIQMain, BelowEditIQVideo } from './StyledBelowEditIQ'
import belowEditIQ from '../../../assets/belowEditIQ.svg'
import ReactPlayer from 'react-player'
const BelowEditIQ = () => {
  return (
    <BelowEditIQMain>
      <Container>
        <BelowEditIQImgContainer>
          <BelowEditIQVideo>
            <video  controls >
              <source src="/Videos/video1.mp4" type="video/mp4" />
            </video>
          </BelowEditIQVideo>

          <BelowEditIQImg src={belowEditIQ} alt={belowEditIQ} />
        </BelowEditIQImgContainer>
      </Container>
    </BelowEditIQMain>
  )
}

export default BelowEditIQ