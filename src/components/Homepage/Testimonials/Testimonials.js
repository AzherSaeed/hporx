import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Testimonial1 from '../../../assets/Testimonial1.svg';
import Testimonial2 from '../../../assets/Testimonial2.svg';
import Testimonial3 from '../../../assets/Testimonial3.svg';
import flag from '../../../assets/flag.svg';
import { Testimonial} from './StyleTestimonial';


function Testimonials() {
    return (

    <Testimonial>
        <div className='container p-5  background'>
            <div className=''>
                <h1 >Testimonilas</h1>
                <p className='text-design'> Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. </p>
            </div>
            <Row >
                <Col md={6} lg={4}>
                    <Card className='Card' >
                        <div className='text-center card-body'>
                          <img src={Testimonial1} alt="Testimonial image"  className='main-image'/>
                            <h3 className="nameHeading">Markes Lorath</h3>
                            <h6 className="profession">Marketing Agency</h6>
                            <img src={flag} alt="flag" className='flag' />
                            <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                            <a href='#'  className='btn-read'>Read More</a>
                        </div>
                    </Card>

                </Col>
                <Col md={6} lg={4}>
                    <Card className='Card' >
                        <div className='text-center card-body'>
                          <img src={Testimonial2} alt="Testimonial image"  className='main-image'/>
                            <h3 className="nameHeading">Markes Lorath</h3>
                            <h6 className="profession">Marketing Agency</h6>
                            <img src={flag} alt="flag" className='flag' />
                            <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                            <a href='#'  className='btn-read'>Read More</a>
                        </div>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className='Card' >
                        <div className='text-center card-body'>
                          <img src={Testimonial3} alt="Testimonial image"  className='main-image'/>
                            <h3 className="nameHeading">Markes Lorath</h3>
                            <h6 className="profession">Marketing Agency</h6>
                            <img src={flag} alt="flag" className='flag' />
                            <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                            <a href='#'  className='btn-read'>Read More</a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    </Testimonial>);
}

export default Testimonials;