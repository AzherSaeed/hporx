import React from 'react'
import AgricultureImgSection from './AgricultureImgSection'
import { AgricultureMainContainer} from './StyledAgriculture'
const Agriculture = () => {
    return (
        <AgricultureMainContainer>
            <h2>
                Contained Environment Agriculture Grow
            </h2>
            <p>
                You can grow profit, profit from you grow
            </p>
            <AgricultureImgSection />
        </AgricultureMainContainer>
    )
}

export default Agriculture