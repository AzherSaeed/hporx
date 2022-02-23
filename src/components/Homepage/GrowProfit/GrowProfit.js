import React from 'react'
import GrowProfitSlick from './GrowProfitSlick'
import { GrowProfitMainContainer, } from './StyledGrowProfit'

const GrowProfit = () => {
    return (
        <div>
        <GrowProfitMainContainer>
            <h2>
                Grow profit, Profit From You Grow
            </h2>
            <p>
                Turn Key Profits
            </p>
            <GrowProfitSlick/>
        </GrowProfitMainContainer>
        </div>
    )
}

export default GrowProfit