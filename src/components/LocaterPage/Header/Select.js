import React from 'react';

function Select({label, name, placehoder}){
    return(<div className='select'>
              <label for="inputCountry">{label}</label>
              <select id="inputCountry" name={name}>
                <option selected>{placehoder}</option>
                <option>...</option>
              </select>
    </div>);
}
export default Select; 