import React from 'react';
import './AgenciesShowCaseStyle.css';
import ReactCompareImage from "react-compare-image";
import leftImg from '../../../assets/left-side.png'
import rightImg from '../../../assets/right-side.png';
import {Placeholder} from 'react-bootstrap';

const BeforeAfterSlider = () => {
  return (
      <ReactCompareImage aspectRatio='taller' skeleton={<Placeholder as="p" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>}  sliderLineColor='#E84025' leftImage={leftImg} rightImage={rightImg} />
  )
}

export default BeforeAfterSlider