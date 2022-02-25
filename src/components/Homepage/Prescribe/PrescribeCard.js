import React from 'react'
import { ShopNowBtn} from '../../Globals/Globals'
import { PrescribeImg, PrescribeImgContainer} from './StyledPrescribe';

const PrescribeCard = ({ img }) => {
    return (
        <PrescribeImgContainer >
            <div className="overlay">
            </div>
            <div className='inner-overlay'>
                <h3>About</h3>
                <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
                <ShopNowBtn>Appointment</ShopNowBtn>
            </div>
            <PrescribeImg  src={img} alt={img} />
        </PrescribeImgContainer >
    )
}

export default PrescribeCard