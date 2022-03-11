import React from 'react'
import { Card } from 'react-bootstrap'
import { AddToCartBtn } from '../../Globals/Globals'
import { EVendorImg, EVendorImgContainer, EVendorMiniImg, MiniPharmImg , EVendorCardMain } from './StyledEVendor'



const EVendorCard = ({ key, img, flag,flag1, miniImg , Flag_of_Canada }) => {
    console.log(flag1);
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
            <div className='d-flex'>
            <EVendorMiniImg className='img-fluid' src={flag} alt="flags" />
            {
                flag1&&
                <EVendorMiniImg className='img-fluid  ms-2' src={flag1} alt="flags" />
            }
        
            </div>


        </EVendorCardMain>

    )
}

export default EVendorCard