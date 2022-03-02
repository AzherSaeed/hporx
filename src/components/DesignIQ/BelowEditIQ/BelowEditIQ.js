import React from 'react'
import { Container } from 'react-bootstrap'
import { BelowEditIQImg } from './StyledBelowEditIQ'
import belowEditIQ from '../../../assets/belowEditIQ.svg'

const BelowEditIQ = () => {
  return (
    <Container>
        
        <BelowEditIQImg src={belowEditIQ} alt={belowEditIQ}/>
       
    </Container>
  )
}

export default BelowEditIQ