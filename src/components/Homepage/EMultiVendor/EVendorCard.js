import React from 'react'
import { Card } from 'react-bootstrap'
import { AddToCartBtn } from '../../Globals/Globals'
import { EVendorImg, EVendorImgContainer, EVendorMiniImg, MiniPharmImg , EVendorCardMain } from './StyledEVendor'



const EVendorCard = ({ key, img, flag, miniImg }) => {
    return (
        <EVendorCardMain>
            <Card key={key} >
                <div className='EVendorCard-main' >
                    <EVendorImgContainer>
                        <MiniPharmImg src={miniImg} alt={miniImg} />
                        <div className="overlay"></div>
                        <div className="EVendorImg-inner-overlay">
                            <AddToCartBtn>Add to Cart</AddToCartBtn>
                        </div>
                        <EVendorImg className='img-fluid' src={img} alt={img} />
                    </EVendorImgContainer>                  
                </div>
            </Card>
            <EVendorMiniImg className='img-fluid' src={flag} alt="flags" />
        </EVendorCardMain>

    )
}

export default EVendorCard