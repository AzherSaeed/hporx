import React from 'react'
import { ViewMoreBtn } from '../../Globals/Globals'
import ChillumsSlick from './ChillumsSlick'
import {ChillumMainContainer } from './StyledChillums'
const Chillum = () => {
    return (
        <ChillumMainContainer>
                <h3>CHILLUMS</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
            <ChillumsSlick/>
            <ViewMoreBtn>View More</ViewMoreBtn>
        </ChillumMainContainer>
    )
}

export default Chillum





















