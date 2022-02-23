import React from 'react'
import AgricultureImgSection from './AgricultureImgSection'
import { AgricultureContainer, AgricultureHeading, AgricultureSubHeading } from './StyledAgriculture'
const Agriculture = () => {
    return (
        <AgricultureContainer>
            <AgricultureHeading>
                Contained Environment Agriculture Grow
            </AgricultureHeading>
            <AgricultureSubHeading>
                You can grow profit, profit from you grow
            </AgricultureSubHeading>
            <AgricultureImgSection />
        </AgricultureContainer>
    )
}

export default Agriculture