import React from 'react'
import { PrimaryHeading, TertiaryHeading } from '../../Globals/Globals'
import CultivationSlick from './CultivationSlick'
import { CultivationMainContainer } from './StyledCultivation'


const Cutivation = () => {
    return (
        <CultivationMainContainer>
            <PrimaryHeading>Cutivation</PrimaryHeading>
            <p>Home Grow</p>
            <TertiaryHeading>Grow your dose privately at home</TertiaryHeading>
            <CultivationSlick />
        </CultivationMainContainer>
    )
}

export default Cutivation