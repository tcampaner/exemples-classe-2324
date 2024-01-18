import { ListGroup } from 'react-bootstrap';

export default function Llista(props) {
    return(
        <ListGroup>
            {props.elements.map((item, index) => (
                <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
        </ListGroup>
    );

}    