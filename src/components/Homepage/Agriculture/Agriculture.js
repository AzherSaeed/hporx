import React from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading } from '../../Globals/Globals'
import AgricultureImgSection from './AgricultureImgSection'
import AgricultureSlick from './AgricultureSlick'
import { AgricultureMainContainer, AgricultureTertiaryHeading } from './StyledAgriculture'
const Agriculture = () => {
    return (
        <AgricultureMainContainer>
            <Container>
                <PrimaryHeading>
                    Contained Environment Agriculture Grow
                </PrimaryHeading>
                <AgricultureTertiaryHeading>
                    You can grow profit, profit from you grow
                </AgricultureTertiaryHeading>
                <AgricultureImgSection />
                <AgricultureSlick/>
            </Container>
        </AgricultureMainContainer>
    )
}
export default Agriculture