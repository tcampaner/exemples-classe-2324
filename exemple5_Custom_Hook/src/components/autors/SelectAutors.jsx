import React,{memo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Row,Col,Alert } from "react-bootstrap";
import useFetch from '../lib/useFetch'; 

function SelectAutors(props) {
  const [ autors, error, descarrega ] = useFetch("http://biblioteca.dawpaucasesnoves.com/server/public/autor/");

  return (
    <>
      {descarrega && (<Alert variant="info">Descarregant....</Alert>)}
      {autors &&
        <Row>
          <Col sm={6}>
            <Form.Select  onChange={props.onChange}>
              <option key="-1" value="-1">Tria un autor...</option>
              {autors.map((tupla)=>
                <option key={tupla.ID_AUT} value={tupla.ID_AUT}>{tupla.NOM_AUT}</option>
              )}
            </Form.Select>
          </Col>
        </Row>
      }
      {error && (<Alert variant="danger">{error}</Alert>)}
    </>
  );
}
export default memo(SelectAutors);