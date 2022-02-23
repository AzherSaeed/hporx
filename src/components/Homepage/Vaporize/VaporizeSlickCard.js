import React from 'react'
import { VaporizeImg1,VaporizeImg2,VaporizeImagesContainer } from './StyledVaporize'
import vaporize1 from '../../../assets/vaporize1.svg'
import vaporize2 from '../../../assets/vaporize2.svg'
import { ViewMoreBtn } from '../../Globals/Globals'
import { Row, Col } from 'react-bootstrap';

const VaporizeSlickCard = () => {
  return (
    <div>
    <Row className='justify-content-between align-items-center'>
        <Col md={6}>
            <h2>VAPORIZE</h2>
            <p>Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet. Quisque  aliquet luctus elit, in hendrerit orci malesuada eu. Morbi feugiat et ligula maximus aliquet</p>
            <ViewMoreBtn>view more</ViewMoreBtn>
        </Col>
        <Col md={6}>
            <VaporizeImagesContainer>
                <VaporizeImg1 src={vaporize1} alt={vaporize1} />
                <VaporizeImg2 src={vaporize2} alt={vaporize1} />
            </VaporizeImagesContainer>
        </Col>
    </Row>
        </div>
  )
}

export default VaporizeSlickCard