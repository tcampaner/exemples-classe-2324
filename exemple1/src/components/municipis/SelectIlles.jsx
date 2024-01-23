import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Alert } from "react-bootstrap";
function SelectIlles(props) {
  const [illes,setIlles]=useState([]);
    const [descarrega,setDescarrega]=useState(true);
    
    const omplirOptions=()=>{
        return illes.map(function(tupla){
            return <option key={tupla.id} value={tupla.id}>{tupla.nom}</option>;
        }); 
    }

    useEffect(
      () => {
        fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/illes')
            .then(response => {
                return response.json(response);
            })
            .then(jsonresposta => {
                setIlles(jsonresposta.result);
                setDescarrega(false);
            }
            )
            .catch(function (error) {
                console.log(error);
            })
    }
      ,
      []
  );

 if (descarrega) {
    return <Alert variant="info">Descarregant....</Alert>;
 } else
  return (
    <Row>
    <Col sm={6}>
      <Form.Control as="select" size="sm" custom onChange={props.onChange}>
        <option key="-1" value="-1">Tria una Illa...</option>
        { omplirOptions() }
      </Form.Control>
    </Col>
  </Row>
  );
}
export default SelectIlles;