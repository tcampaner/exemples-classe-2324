import { useContext } from "react";
import { MeuContexte } from "./MeuContexte";

function Component1() {
    const contexte=useContext(MeuContexte);
    return ( 
        <>
            <h1>Component 1</h1>
            <input type="text" value={contexte.nom} onChange={(e)=>contexte.setNom(e.target.value)} />
            <hr/>
        </>
     );
}

export default Component1;