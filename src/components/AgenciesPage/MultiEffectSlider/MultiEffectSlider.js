import React from "react";
import "./MultiEffectSlider.css";
import modalImg from "../../../assets/model-img.png";
import bgmain from "../../../assets/Model-bg.png";
import { Modal, Button } from "react-bootstrap";
import BeforeAfterSlider from "../AgenciesShowCase/BeforeAfterSlider";

function MyVerticallyCenteredModal(props) {
  return (
    <div className="pop-before-model">

      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div class="modal-body">
         <button onClick={props.onHide} type="button" class="btn-close" ></button>

          <img class="main-img" src={bgmain} alt="background-img" />
          <div class="outer-div">
            <div class="beforeAfter">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const MultiEffectSlider = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div class="model-before-afters">
     
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mod-img">
            <a onClick={() => setModalShow(true)}>
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
          <div class="col-lg-4 col-md-6 mod-img" onClick={() => setModalShow(true)}>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
          <div class="col-lg-4 col-md-6 mod-img" onClick={() => setModalShow(true)}>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
          <div class="col-lg-4 col-md-6 mod-img">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
          <div class="col-lg-4 col-md-6 mod-img">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
          <div class="col-lg-4 col-md-6 mod-img">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
              <img src={modalImg} alt="modalImg" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MultiEffectSlider;
