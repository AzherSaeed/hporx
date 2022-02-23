import React from 'react'
import { AddToCartBtn } from '../../Globals/Globals'
import { CutivationImg, CutivationImgContainer } from './StyledCutation'

const CutivationCard = ({img}) => {
    return (
        <CutivationImgContainer>
            <div className='inner-overlay'>
                <AddToCartBtn>Add to Cart</AddToCartBtn>
            </div>
            <CutivationImg src={img} alt={img} />
        </CutivationImgContainer>
    )
}

export default CutivationCard