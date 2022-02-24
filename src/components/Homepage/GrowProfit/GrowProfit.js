import React from 'react'
import { TertiaryHeading } from '../../Globals/Globals'
import GrowProfitSlick from './GrowProfitSlick'
import { GrowProfitHeading, GrowProfitMainContainer, GrowProfitSubHeading, } from './StyledGrowProfit'

const GrowProfit = () => {
    return (
        <div>
        <GrowProfitMainContainer>
            <div className='text-center'>
            <GrowProfitHeading>
            Agriculturists
            </GrowProfitHeading>
            <GrowProfitSubHeading>
                Grow profit, Profit From You Grow
            </GrowProfitSubHeading>
            <TertiaryHeading>
            Delivered turnkey and ready to grow guarantee profits
            </TertiaryHeading>
            </div>
            <GrowProfitSlick/>
        </GrowProfitMainContainer>
        </div>
    )
}

export default GrowProfit