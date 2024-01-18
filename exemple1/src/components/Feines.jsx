import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import Llista from './Llista';

export default function Feines() {
    const [feines, setFeines] = useState([]);
    const [tasca, setTasca] = useState('');

    const  addItem=()=> {
        setFeines([...feines, tasca]);
    }

    const deleteItem=(index)=> {
        setFeines(feines.filter((item, i) => i !== index));
    }

  return (
        <div>
        <h1>Feines</h1>
        <Form>
            <Form.Group>
                <Form.Label>Tasca</Form.Label>
                <Form.Control type="text" id="item" placeholder="Descripció" 
                value={tasca} 
                onChange={(e)=>setTasca(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={addItem}>
                Afegir
            </Button>
        </Form>
        <hr/>
        <Llista elements={feines} esborrar={deleteItem}/>
        </div>
       
    );
    }