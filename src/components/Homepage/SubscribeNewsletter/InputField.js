
import React from 'react'
import { Form} from 'react-bootstrap'

const InputField = ({ placeholder, type,label }) => {
  return (
    <Form.Group className="mb-3 subscribe-form" controlId="exampleForm.ControlInput1">
      <Form.Label className='input-label'>{label}</Form.Label>
      <Form.Control className='input-field' type={type} placeholder={placeholder} />
    </Form.Group>
  )
}

export default InputField