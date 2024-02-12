import React,{useState,useContext} from 'react';
import { Contexte } from '../../contexts/Contexte';
import { Alert, Spinner, Form, Button } from 'react-bootstrap';
import { TIPUS_ACCIO_LOGIN } from '../../store/reducers/loginReducer';
import {useNavigate} from 'react-router-dom';


export default function Login() {
    const [email,setEmail]=useState('cfb@paucasesnovescifp.cat');   // Usuari de prova
    const [password,setPassword]=useState('tururu');
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const contexte=useContext(Contexte);
    const navigate=useNavigate();

    const ferLogin=()=>{
        let data = { email: email, password: password }
        setLoading(true);
        fetch(' http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/login',
            {
                method: 'POST', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resposta => {
                console.log(resposta);
                return resposta.json()
            })
            .then(respostajson => {
                console.log(contexte);
                console.log(respostajson);
                if (respostajson.result) {
                    let token=respostajson.result.token;
                    let usuari=respostajson.result.usuari;
                    contexte.dispatchLogin({type:TIPUS_ACCIO_LOGIN.LOGIN ,payload:{token:token, usuari:usuari}})
                    setError(false);
                    navigate('/');
                } else {
                    setError(true);    
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setError(true);
                setLoading(false);
            })

    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        ferLogin();
    }

        return (
            <>
            <h2>Valida Usuari</h2>
            <hr/>
            <Form onSubmit={ferLogin} method='post'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Entar email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}                             name="password"
                            required
                            autoComplete="current-password"/>
              </Form.Group>
              <Button variant="primary" onClick={ferLogin}>
                Login
              </Button>
            </Form>
            { error && <Alert variant="danger">Usuari o password incorrectes.</Alert> }
            { loading && <Alert variant="info"><Spinner/></Alert> }
            </>
          );
}