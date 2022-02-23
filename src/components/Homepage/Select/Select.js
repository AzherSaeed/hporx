import * as React from 'react';

import './Select.css'

export default function Select() {
  const  options=['yes','no','other']

  return (

    <select defaultValue={options[0]} className='select' id="country" name="country">
      {options.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}

    </select>

  );
}
