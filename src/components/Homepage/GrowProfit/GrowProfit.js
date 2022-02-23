import React from 'react'
import { Container } from 'react-bootstrap'
import GrowProfitSlick from './GrowProfitSlick'
import { GrowProfitContainer, GrowProfitHeading, GrowProfitSubHeading } from './StyledGrowProfit'

const GrowProfit = () => {
    return (
        <Container fluid >
        <GrowProfitContainer>
            <GrowProfitHeading>
                Grow profit, Profit From You Grow
            </GrowProfitHeading>
            <GrowProfitSubHeading>
                Turn Key Profits
            </GrowProfitSubHeading>
            <GrowProfitSlick/>
        </GrowProfitContainer>
        </Container>
    )
}

export default GrowProfit