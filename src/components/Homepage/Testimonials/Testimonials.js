import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Testimonial1 from '../../../assets/Testimonial1.svg';
import Testimonial2 from '../../../assets/Testimonial2.svg';
import Testimonial3 from '../../../assets/Testimonial3.svg';
import flag from '../../../assets/flag.svg';
import { Testimonial } from './StyledTestimonials';
import Slider from 'react-slick';


function Testimonials() {
  const imgs = [Testimonial1, Testimonial2, Testimonial3,Testimonial1, Testimonial2, Testimonial3]

  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <Testimonial>
 <h1 >Testimonilas</h1>
          <p className='text-design'> Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. </p>
      <div className='container p-5 '>
        <Slider {...settings} className='trusted-suppliers-slick'>
          {imgs.map((img, index) => (
            <div key={index}>
              <Card className='Card' >
                <div className='text-center card-body'>
                  <img class src={img} alt="Testimonial " className='main-image mx-auto' />
                  <h3 className="nameHeading">Markes Lorath</h3>
                  <h6 className="profession">Marketing Agency</h6>
                  <img src={flag} alt="flag" className='flag mx-auto' />
                  <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                  <a href='#' className='btn-read'>Read More</a>
                </div>
              </Card>
            </div>
          ))
          }
        </Slider>
        <div className=''>
         
        </div>
        {/* <Row >
          <Col md={6} lg={4}>
            <Card className='Card' >
              <div className='text-center card-body'>
                <img src={Testimonial1} alt="Testimonial " className='main-image' />
                <h3 className="nameHeading">Markes Lorath</h3>
                <h6 className="profession">Marketing Agency</h6>
                <img src={flag} alt="flag" className='flag' />
                <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                <a href='#' className='btn-read'>Read More</a>
              </div>
            </Card>

          </Col>
          <Col md={6} lg={4}>
            <Card className='Card' >
              <div className='text-center card-body'>
                <img src={Testimonial2} alt="Testimonial " className='main-image' />
                <h3 className="nameHeading">Markes Lorath</h3>
                <h6 className="profession">Marketing Agency</h6>
                <img src={flag} alt="flag" className='flag' />
                <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                <a href='#' className='btn-read'>Read More</a>
              </div>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className='Card' >
              <div className='text-center card-body'>
                <img src={Testimonial3} alt="Testimonial " className='main-image' />
                <h3 className="nameHeading">Markes Lorath</h3>
                <h6 className="profession">Marketing Agency</h6>
                <img src={flag} alt="flag" className='flag' />
                <div className='lead'>"Curabitur cursus sagittis varius. Quisque aliquet luctus elit, in hendrerit orci malesuada eu. "</div>
                <a href='#' className='btn-read'>Read More</a>
              </div>
            </Card>
          </Col>
        </Row> */}
      </div>
    </Testimonial>);
}

export default Testimonials;