import React from 'react'
import { PrimaryHeading } from '../../Globals/Globals'
import EVendorSlick from './EVendorSlick'
import { EVendorMain, EVendorViewMoreBtn } from './StyledEVendor'

const EMultiVendor = () => {
    return (
        <EVendorMain>
            <PrimaryHeading><span style={{ color: 'red', textTransform: 'lowercase' }}>e</span>Commerce Multivendor Marketplace</PrimaryHeading>
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