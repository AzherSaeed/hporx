import React from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading } from '../../Globals/Globals'
import AgricultureImgSection from './AgricultureImgSection'
import AgricultureSlick from './AgricultureSlick'
import { AgricultureMainContainer, AgricultureTertiaryHeading } from './StyledAgriculture'
const Agriculture = ({id}) => {
    return (
        <div id={id}>
        <AgricultureMainContainer >
            <Container>
                <PrimaryHeading>
                    Contained Environment Agriculture
                </PrimaryHeading>
                <AgricultureTertiaryHeading>
                    You can grow profit, profit from you grow
                </AgricultureTertiaryHeading>
                <AgricultureImgSection />
                <AgricultureSlick/>
            </Container>
        </AgricultureMainContainer>
        </div>
    )
}
export default Agriculture