import React from 'react'
import { QuotatinMainContainer } from './StyledQuotation'

const Quotation = () => {
  return (
    <QuotatinMainContainer>
        <div className='inner-div'>
    <b>Quotation of the day </b>
    <p>" A mans true color is appeared as tea color appeared in the hot boiling water."</p>
    <div className='cancel-btn'>
    <h3>X</h3>
    </div>
        </div>
    </QuotatinMainContainer>
  )
}

export default Quotation