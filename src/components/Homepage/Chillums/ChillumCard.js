import React from 'react'
// import { InhalatedImgContainer, InhalteImg } from '../../Inhalate/StyledInhalate'

import { ShopNowBtn } from '../../Globals/Globals'
import { ChillumImg,  ChillumImgContainer } from './StyledChillums'
const ChillumCard = ({img}) => {
    return (
        <ChillumImgContainer>
            <ChillumImg src={img} alt={img} />
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                {/* <h3>CHILLUMS</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                <ShopNowBtn>Quick Shop</ShopNowBtn> */}
            </div>
        </ChillumImgContainer>
    )
}

export default ChillumCard