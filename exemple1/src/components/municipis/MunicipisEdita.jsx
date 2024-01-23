import SelectIlles from "./SelectIlles";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MunicipisEdita() {
    const [nom, setNom] = useState("");
    const [illa_id, setIlla_id] = useState(null);
    const navigate=useNavigate();

    const guarda=(e)=>{
        console.log('guarda');
        // fetch post
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
                    <Form.Label>Illa</Form.Label>
                    <SelectIlles onChange={(e) => { setIlla_id(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={guarda}>
                    Guarda
                </Button>
                &nbsp;&nbsp;
                <Button variant="warning" type="button" onClick={() => navigate("/municipis")}>
                    Cancel·la
                </Button>
            </Form>
        </div>
    );
    }