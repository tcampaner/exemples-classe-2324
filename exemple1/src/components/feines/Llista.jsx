import { Button, ListGroup, Row, Col } from 'react-bootstrap';

export default function Llista(props) {
    return(
        <ListGroup>
            {props.elements.map((item, index) => (
                <ListGroup.Item key={index}>
                    <Row>
                        <Col xs={10}>{item}</Col>
                        <Col xs={2}>
                            <Button variant="danger" onClick={()=>props.esborrar(index)}>Esborrar</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );

}    