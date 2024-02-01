
import { storage } from '../../utils/storage';
import {Button, Container, Form} from 'react-bootstrap';





export default function Logout(){

    const tancar=()=>{

        storage.remove('token');
        storage.remove('usuari');
    }

        return  (
            <Container>
            <h2>Sortir de la sessió?</h2>
            <Form onSubmit={tancar} action="/">
            <Button variant="primary" type="submit">
                Sortir
            </Button>
            </Form>
            </Container>
        );
}