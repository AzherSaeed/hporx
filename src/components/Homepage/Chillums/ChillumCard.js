import React from 'react'
// import { InhalatedImgContainer, InhalteImg } from '../../Inhalate/StyledInhalate'

import { ShopBtnTransparent, ShopNowBtn, ViewMoreBtn } from '../../Globals/Globals'
import PlayBtn from '../../Globals/PlayBtn'
import { ChillumBtn, ChillumImg,  ChillumImgContainer, ChillumQuickShopBtn } from './StyledChillums'
const ChillumCard = ({img}) => {
    return (
        <ChillumImgContainer>
            <ChillumImg src={img} alt={img} />
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <PlayBtn/>
                <h3>CHILLUMS</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu.</p>
                <p className="price">$450</p>
                <ChillumBtn>Quick Shop</ChillumBtn>
            </div>
        </ChillumImgContainer>
    )
}

export default ChillumCard