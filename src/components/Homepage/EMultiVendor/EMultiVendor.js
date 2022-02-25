import React from 'react'
import { PrimaryHeading } from '../../Globals/Globals'
import { DiagnoseAppointmentBtn } from '../Diagnose/StyledDiagnose'
import EVendorSlick from './EVendorSlick'
import { EVendorMain } from './StyledEVendor'

const EMultiVendor = () => {
    return (
        <EVendorMain>
        
            <PrimaryHeading><span style={{ color: 'red' }}>e</span> Commerce Multivendor Marketplace</PrimaryHeading>
            <p>WHERE MERCHANTS MEET BUYERS</p>
            <EVendorSlick/>
            <div className='evendor-2'>
            <EVendorSlick/>
            </div>
      <DiagnoseAppointmentBtn>View More</DiagnoseAppointmentBtn>
        </EVendorMain>
    )
}

export default EMultiVendor