import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col, Spinner } from 'react-bootstrap';

export default function Municipis() {
    const [municipis, setMunicipis] = useState([]);
    const [descarregant, setDescarregant] = useState(true);

    useEffect(
        () => {
            fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis')
                .then(response => {
                    return response.json(response);
                })
                .then(jsonresposta => {
                    setMunicipis(jsonresposta.result);
                    setDescarregant(false);
                }
                )
                .catch(function (error) {
                    console.log(error);
                })
        }
        ,
        []
    );

   if (descarregant) {
        return (
            <div>
                <h1>Municipis</h1>
                <Spinner/>
            </div>
        );
    }
    else {
    return (
        <ListGroup>
            {municipis.map(function (element, index) {
                return (
                    <>
                        <ListGroup.Item variant="primary" >
                            <Row key={index}>
                                <Col>{element.nom}</Col>
                                <Col>{element.illa.nom}</Col>
                            </Row>
                        </ListGroup.Item>
                    </>
                );
            })}
        </ListGroup>
    );
        }
        
}    