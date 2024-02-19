import React, { useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import SelectAutors from './SelectAutors';
import LlistaLLibres from './LlistaLlibres';


function Autors() {
    const [autorid,setAutorId]=useState(null);

    const onChange=(e)=>{
       setAutorId(e.target.value);
    }

  return (
    <>
      <hr/>
      <h2>Autors Bilioteca</h2>
      <SelectAutors onChange={onChange} />
      <hr/>
      <LlistaLLibres id={autorid} />
    </>
  );
}
export default Autors;