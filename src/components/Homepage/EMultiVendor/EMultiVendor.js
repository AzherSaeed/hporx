import React from 'react'
import { PrimaryHeading } from '../../Globals/Globals'
import EVendorSlick from './EVendorSlick'
import { EvendorHeading, EVendorMain, EVendorViewMoreBtn } from './StyledEVendor'

const EMultiVendor = () => {
    return (
        <EVendorMain>
            <EvendorHeading style={{textTransform:'Captilize !important'}}><span style={{ color: 'red', textTransform: 'lowercase' }}>e</span>Commerce Multivendor Marketplace</EvendorHeading>
            <p>WHERE MERCHANTS MEET BUYERS</p>
            <EVendorSlick />
            <div className='evendor-2'>
                <EVendorSlick />
            </div>
            <EVendorViewMoreBtn>View More</EVendorViewMoreBtn>
        </EVendorMain>
    )
}

export default EMultiVendor