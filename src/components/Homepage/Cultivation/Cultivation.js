import React from 'react'
import CultivationSlick from './CultivationSlick'
import { CultivationMainContainer } from './StyledCultivation'


const Cutivation = () => {
    return (
        <CultivationMainContainer>
            <h3>Cutivation</h3>
            <p>Home Grow</p>
            <p className='tertiary-heading'>Grow your dose privately at home</p>
            <CultivationSlick />
        </CultivationMainContainer>
    )
}

export default Cutivation