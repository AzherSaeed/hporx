import React from 'react'
import { ViewMoreBtn } from '../Globals/Globals'
import InhalateSlick from './InhalateSlick'
import {InhalateMainContainer } from './StyledInhalate'


const Inhalate = () => {
    return (
        <InhalateMainContainer>
            <h3>Inhalate</h3>
            <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
            <InhalateSlick />
            <ViewMoreBtn>view more</ViewMoreBtn>
        </InhalateMainContainer>
    )
}

export default Inhalate