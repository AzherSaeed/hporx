import React from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading, ViewMoreBtn } from '../../Globals/Globals'
import InhalateSlick from './InhalateSlick'
import {InhalateButtonContainer, InhalateMainContainer, InhalateTextContainer } from './StyledInhalate'


const Inhalate = () => {
    return (
        <Container>
        <InhalateMainContainer>
            <InhalateTextContainer>
            <PrimaryHeading>Inhalate</PrimaryHeading>
            <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
            </InhalateTextContainer>
            <InhalateSlick />
            <InhalateButtonContainer>
            <ViewMoreBtn>View More</ViewMoreBtn>
            </InhalateButtonContainer>
        </InhalateMainContainer>
</Container>
    )
}

export default Inhalate