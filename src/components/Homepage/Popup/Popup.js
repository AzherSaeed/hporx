import React from "react";
import { StylePopup } from "./StylePopup";
import Logo1 from '../../../assets/Logo1.svg';
import {Row,Col,Button} from 'react-bootstrap';

function Popup(props){
    return(
    <StylePopup>
             <div className="logo">
                   <img src={Logo1} alt="Logo"/>
            </div>
            <Button className="btn-close" ></Button>
            <Row className="rows">
                    <Col className="borders text-center">
                            <div className=" text-center">
                                <h5 className="win-text">Win</h5>
                                <h2 className="price-style">1000 <span className="dollar-sign">$</span></h2>
                                <p className="win-text mt-4 mb-5">Get Card or Cash prize</p>
                                <p className="paragraph text-white">You have opportunity to do is submit a short 15-30 secondtestimonials video on how cannbis has<br/>helped you </p>
                                <Button className="btn choose-file">Choose file</Button>
                            </div>
                    </Col>
                    <Col className="">
                            <div className="dateofbirth mb-5 text-center">Please Select you Date of birth</div>
                            <form>
                                 <div class="form-group">
                                 <label for="country" className="mb-2 fw-5 labels">Your Country <span className="text-danger">*</span></label>
                                 <input type="text" class="form-control  inputs"  id="country" name='country' value={props.country} readOnly/>
                                 </div>
                                 <div class="form-group">
                                 <label for="country" className="mb-2 fw-5 labels">Your State <span className="text-danger">*</span></label>
                                 <input type="text" class="form-control  inputs"  id="country" name='state' value={props.region} readOnly/>
                                </div>
                                 <div class="form-group">
                                 <label for="dob" className="mb-2 fw-5 labels">DOB <span className="text-danger">*</span></label>
                                 <input type='date' class="form-control  inputs"  id="dob" placeholder="dd/mm/year" required/>
                                </div>
                                <Button className="btns d-grid col-2 mx-auto btn-lg clo-3">Confirm</Button>
                                </form>    
                   </Col>
                </Row>
    </StylePopup>);
}

export default Popup;