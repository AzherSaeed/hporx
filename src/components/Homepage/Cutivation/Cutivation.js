import React from 'react'
import CutivationSlick from './CutivationSlick'
import { CutivationMainContainer } from './StyledCutation'


const Cutivation = () => {
    return (
        <CutivationMainContainer>
            <h3>Cutivation</h3>
            <p>Home Grow</p>
            <p className='tertiary-heading'>Grow your dose privately at home</p>
            <CutivationSlick />
        </CutivationMainContainer>
    )
}

export default Cutivation