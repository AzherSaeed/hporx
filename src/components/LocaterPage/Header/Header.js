import React, { useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { StyleHeader } from "./StyleHeader";
import { Form, Formik ,ErrorMessage} from 'formik';
import Select from "./Select";
import Search from '../../../assets/Search.svg';
import Flag1 from '../../../assets/Flag1.svg';
import Star1 from '../../../assets/Star1.svg';
import Like from '../../../assets/Like.svg';
import Card1img from '../../../assets/Card1img.svg';
import Card2img from '../../../assets/Card2img.svg';
import Card3img from '../../../assets/Card3img.svg';
import Card4img from '../../../assets/Card4img.svg';
import GenerecService from "../../../services/GenericService";
import *as Yup from 'yup';
import Pagination from "./Pagination";

function Header() {
    const[currentPage ,setCurrentPage]=useState(1);
    const[postPerPage ,setPostPerPage]=useState(12);
    const arr=[Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card2img,Card4img,Card4img]
    const countryList=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan"];
    const cityList=['Karachi', 'Lahore','Faisalabad','Rawalpindi','Gujranwala','Peshawar','Hyderabad','Islamabad','Quetta','Bahawalpur','Sargodha','Sialkot','Sukkur','Larkana','Chiniot','Shekhupura','Jhang City','Dera Ghazi Khan','Gujrat','Rahimyar Khan','Kasur'];
    const serviceList=["Medical Specialist","Orthopedic","Surgen","Child Specialist"];
    const validate=Yup.object( {
      country: Yup.string().required("Please select a country"),
      city: Yup.string().required("Please select a city"),
      service: Yup.string().required("Please Select a Service"),
    });
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost-postPerPage;
    const currentPost= arr.slice(indexOfFirstPost,indexOfLastPost);

     function paginate(pageNumber){
              setCurrentPage(pageNumber);
     }
     const genericService = new GenerecService();
  return (
    <StyleHeader>
      <div className="header">
      <div className="container">
        <h1>LOCATE</h1>
        <h2>
          DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND LAWYERS
        </h2>
        <Formik initialValues={{
                     country:'',
                      city:'',
                      service:''
                    }}
                    validationSchema={validate}    
                    onSubmit={values=>{
                       // console.log(values);
                       
                       genericService.post(`http://192.168.100.20:3001`, values)
                       .then((msg)=>{
                        
                         console.log(msg)})
                       .catch((error)=>{
                        
                        console.log(error)
                       })
                    }}>
                     {formik  =>(
        <Form>
        <Row className="select-option align-items-center">
   
          <Col md={3} sm={6}>
            <Select label='Country' name='country' title={'Choose country'} list={countryList} className="select"/>
            <ErrorMessage name="country"/>
          </Col>
          <Col md={3} sm={6}>
          <Select label='City' name='city'  title={'Choose City'} list={cityList}/>
          <ErrorMessage name="city"/>
          </Col>
          <Col md={3} sm={6}>
          <Select label='Service' name='service' title={'Choose Service'}  list={serviceList}/>
          <ErrorMessage name="service"/>
          </Col>
          <Col  md={3} sm={6}>
             <Button className="btn" type="submit"><img src={Search} alt="Search icon" className="search-img"/> Search</Button>
          </Col>
        
         </Row>
         </Form>
                     )}
        </Formik>
        </div>
      </div>
   <div className="container">
       <Row>
       {currentPost.map((v)=>
           <Col  lg={3} md={6} sm={6}>
               <Card className="cards">
                <div className><img src={v}  className="img-section" alt="img"/> </div>
                <div className="card-data">
                    <h6>Advance Medical Associates PC...</h6>
                    <p className="para">Doctor & Medical Marijuana - Cannabis...</p>
                    <div className="d-flex pt-1 text1">
                        <div ><img src={Flag1} className="icon " alt="icon"/><span className="icon-text">USA</span></div>
                        <div ><img src={Star1} className="icon " alt="icon"/><span className="icon-text">0.0</span></div>
                        <div ><img src={Like} className="icon " alt="icon"/><span className="icon-text">Likes 0</span></div>
                    </div>
                    <div>
                        <input type='submit' className="locator-card-bt" name="See Details" value="See Details"/>
                    </div>
                </div>
               </Card>
           </Col>
       )}
       </Row>
       <Pagination postPerPage={postPerPage} totalPosts={arr.length} paginate={paginate} size="lg" />
   </div>
    </StyleHeader>
  );
}

export default Header;
