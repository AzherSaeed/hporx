import React from 'react'
import { EVendorImg, EVendorImgContainer} from './StyledEVendor'



const EVendorCard = ({ key,img, miniImg }) => {
    return (
        <div key={key}>
            <EVendorImgContainer>
                <EVendorImg className='img-fluid' src={img} alt={img} />
            </EVendorImgContainer>
        </div>
    )
}

export default EVendorCard