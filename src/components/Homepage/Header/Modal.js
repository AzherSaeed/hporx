import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import Popup from '../Popup/Popup';
import './modal.css'

const HomeModal = (props) => {
  return (
    <Modal
    style={{maxHeight : '800px' }}
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
      <Popup country={props.country} state={props.state} setModalShow={props.setModalShow}/>
  </Modal>  
  )
}

export default HomeModal