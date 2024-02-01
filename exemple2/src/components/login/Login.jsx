import React,{useState} from 'react';
import { Alert, Spinner, Form, Button } from 'react-bootstrap';



export default function Login(props) {
    const [email,setEmail]=useState('cfb@paucasesnovescifp.cat');   // Usuari de prova
    const [password,setPassword]=useState('tururu');
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const [usuari_nom,setUsuari_nom]=useState('');

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
                console.log(respostajson);
                if (respostajson.result) {
                    let token=respostajson.result.token;
                    let usuari=respostajson.result.usuari;
                    setUsuari_nom(usuari.nom+' '+usuari.llinatges);
                    props.guardaUsuari(usuari);  //executa la funció guardaUsuari que li passam per props
                    props.guardaToken(token);  // executa la funció guardaToken que li passam per props
                    setError(false);
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
       if (usuari_nom!=='' ) {
            return (
                <>
                <hr/>
                <Alert variant="success">
                    Benvingut {usuari_nom}
                </Alert>
                </>
            );
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