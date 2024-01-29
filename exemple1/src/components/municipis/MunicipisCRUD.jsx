import SelectIlles from "./SelectIlles";
import { Form, Button, Alert, Toast, Spinner} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MunicipisCRUD() {
    const [nom, setNom] = useState("");
    const [illa_id, setIlla_id] = useState(null);
    const [error, setError] = useState('');
    const [edita, setEdita] = useState(false);
    const navigate=useNavigate();
    const { id } = useParams();
    const [descarregant, setDescarregant] = useState(false);

    useEffect(()=>{if (id!==-1) {descarrega()}},[]);

    const descarrega=async ()=>{
        setDescarregant(true);
        setEdita(true);
        try {
            const resposta = await fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis/'+id);
            // if (resposta.status !== 200) throw 'Error en descarregar les dades';
            const jsonresposta = await resposta.json();
            setNom(jsonresposta.result.nom);
            setIlla_id(jsonresposta.result.illa_id);
        } catch (error) {
            console.log(error);
        }
        setDescarregant(false);
    }

    const guarda=()=>{
        if (edita) {
            modifica();
        } else {
            crea();
        }
    }


    const crea=()=>{
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
                navigate('/municipistable');
            }
        })
    }

    const modifica=()=>{
        fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis/'+id,{
            method:'PUT',
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
                navigate('/municipistable');
            }
        })
    }

    const esborra=()=>{
        fetch('http://balearcs.dawpaucasesnoves.com/balearcsapi/public/api/municipis/'+id,{
            method:'DELETE',
        }).then(resposta=>{
            // 200 si borrat correctament
            if (resposta.status===200) {
                navigate('/municipistable');
            } else {
                setError("Error: "+resposta.status);
            }
        })
        .catch((error)=>{
            setError("Error: "+error);
        })
    }

    const getMsgError=(llistaErrors)=>{
        let msg=''
        for (let clau in llistaErrors) {
           msg=msg+llistaErrors[clau]+'. ';
        }
        return msg;
    }

    if (descarregant) { return <Spinner /> }

    return (
        <div>
            <Form>
                {edita &&
                    <Form.Group className="mb-3">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="id" value={id} disabled />
                    </Form.Group>
                }
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
                    {edita ? "Guarda" : "Crea"}
                </Button>
                &nbsp;&nbsp;
                <Button variant="warning" type="button" onClick={() => navigate("/municipis")}>
                    Cancel·la
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {edita &&
                    <Button variant="danger" type="button" onClick={esborra}>
                        Esborra
                    </Button>
                }
            </Form>
            <br />
            {error !== '' && <Alert variant="danger">{error}</Alert>}
        </div>
    );
    }