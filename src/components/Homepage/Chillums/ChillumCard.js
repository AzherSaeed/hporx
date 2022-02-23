import React from 'react'
import { InhalatedImgContainer, InhalteImg } from '../../Inhalete/StyledInhalate'

import { ShopNowBtn } from '../../Globals/Globals'
const ChillumCard = ({img}) => {
    return (
        <InhalatedImgContainer>
            <InhalteImg src={img} alt={img} />
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <h3>CHILLUMS</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                <ShopNowBtn>Quick Shop</ShopNowBtn>
            </div>
        </InhalatedImgContainer>
    )
}

export default ChillumCard