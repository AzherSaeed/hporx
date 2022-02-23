import React from 'react'
import { ShopNowBtn } from './Globals'
import { ImgOverlayContainer } from './GlobalStyles'

const ImgOverlay = ({ props }) => {
    const { heading, subHeading, btnName } = props
    return (
        <ImgOverlayContainer>
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <h3>{heading}</h3>
                <p>{subHeading}</p>
                <ShopNowBtn>{btnName}</ShopNowBtn>
            </div>
        </ImgOverlayContainer>
    )
}

export default ImgOverlay