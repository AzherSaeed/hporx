import React from 'react'
import { AddToCartBtn } from '../../Globals/Globals'
import { EVendorImg, EVendorImgContainer} from './StyledEVendor'



const EVendorCard = ({ key,img, miniImg }) => {
    return (
        <div key={key}>
            <EVendorImgContainer>
            <div className="overlay"></div>
                <div className="inner-overlay">
                  <AddToCartBtn>Add to Cart</AddToCartBtn>
                </div>
                <EVendorImg className='img-fluid' src={img} alt={img} />
            </EVendorImgContainer>
        </div>
    )
}

export default EVendorCard