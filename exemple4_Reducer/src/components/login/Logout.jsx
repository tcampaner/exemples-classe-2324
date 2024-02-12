import { storage } from '../../utils/storage';
import {Button, Container, Form} from 'react-bootstrap';
import { TIPUS_ACCIO_LOGIN } from '../../store/reducers/loginReducer';
import { useContext } from 'react';
import { Contexte } from '../../contexts/Contexte';
import { useNavigate } from 'react-router-dom';

export default function Logout(){
    const contexte=useContext(Contexte);
    const navigate=useNavigate();

    const tancar=()=>{
        contexte.dispatchLogin({type:TIPUS_ACCIO_LOGIN.LOGOUT,payload:{}});
        navigate('/');
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