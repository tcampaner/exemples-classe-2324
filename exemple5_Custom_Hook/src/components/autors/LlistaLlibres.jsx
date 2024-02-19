import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,ListGroup,Alert } from "react-bootstrap";
import useFetch from '../lib/useFetch';


function LlistaLLibres(props) {
    const [ llibres, error, descarrega ] = useFetch("http://biblioteca.dawpaucasesnoves.com/server/public/autor/" + props.id + "/llibres/");

    return ( 
      <>
        {descarrega && (<Alert variant="info">Descarregant Llibres....</Alert>)}
        {llibres &&
          <Row>
            <Col sm={6}>
              {llibres.length === 0 && <Alert variant="warning">No hi ha cap llibre per aquest autor</Alert>}
              <ListGroup>
                {llibres.map(item => (
                  <ListGroup.Item variant="primary" key={item.ID_LLIB}>
                    {item.TITOL}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        }
        {error && (<Alert variant="danger">{error}</Alert>)}
      </>
     );
}


export default LlistaLLibres;