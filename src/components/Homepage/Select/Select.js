import * as React from 'react';

import './Select.css'

export default function Select({title}) {
  const options = ['Select Option', 'no', 'other']

  return (
    <>
      <label className='select-label' >{title}</label>
      <select defaultValue={options[0]} className='select' id="country" name="country">
        {options.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </>

  );
}
