import React from 'react'
import prescribe from '../../../assets/prescribe.svg'
import prescribe1 from '../../../assets/prescribe1.svg'
import prescribe2 from '../../../assets/prescribe2.svg'
import prescribe3 from '../../../assets/prescribe3.svg'
import { ShopNowBtn, ViewMoreBtn } from '../../Globals/Globals'
import { PrescribeImg, PrescribeImgContainer, PrescribeButton } from './StyledPrescribe';

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
            <PrescribeImg src={img} alt={img} />
        </PrescribeImgContainer >
    )
}

export default PrescribeCard