import SelectIlles from "./SelectIlles";
import { Form, Button, Alert, Toast} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MunicipisEdita() {
    const [nom, setNom] = useState("");
    const [illa_id, setIlla_id] = useState(null);
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const guarda=()=>{
        fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nom:nom,
                illa_id:illa_id
            })
        }).then(resposta=>resposta.json())
        .then((respostajson)=>{
            if (respostajson.error) {
                setError("Error: "+getMsgError(respostajson.error));
            } else {
                setError('');
                navigate('/municipis');
            }
        })
    }

    const getMsgError=(llistaErrors)=>{
        let msg=''
        for (let clau in llistaErrors) {
           msg=msg+llistaErrors[clau]+'. ';
        }
        return msg;
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Municipi</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom del municipi"
                        name="municipi"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Illa({illa_id})</Form.Label>
                    <SelectIlles id={illa_id} onChange={(e) => { setIlla_id(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={guarda}>
                    Guarda
                </Button>
                &nbsp;&nbsp;
                <Button variant="warning" type="button" onClick={() => navigate("/municipis")}>
                    Cancel·la
                </Button>
            </Form>
            <br/>
            {error!=='' && <Alert variant="danger">{error}</Alert>}
        </div>
    );
    }