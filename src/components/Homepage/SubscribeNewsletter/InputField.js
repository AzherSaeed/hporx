
import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const InputField = ({placeholder,type}) => {
  return (
    <InputGroup size="lg">
    <FormControl type={type} className='py-4 fs-3' aria-label="Large" 
     placeholder={placeholder}aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
  )
}

export default InputField