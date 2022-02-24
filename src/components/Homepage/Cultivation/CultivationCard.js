import React from 'react'
import { CultivationiImg, CultivationImgContainer } from './StyledCultivation';
import { AddToCartBtn} from '../../Globals/Globals';
const CultivationCard = ({ img }) => {
    return (
        <CultivationImgContainer>
            <div className='inner-overlay'>
                <AddToCartBtn>Add to Cart</AddToCartBtn>
            </div>
            <CultivationiImg src={img} alt={img} />
        </CultivationImgContainer>
    )
}

export default CultivationCard