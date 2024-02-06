import { useContext } from "react";
import { MeuContexte } from "./MeuContexte";

function Component2() {
    const contexte=useContext(MeuContexte);
    return ( 
      <>
        <h1>Component 2</h1>
        <h2>Nom:{contexte.nom}</h2>
        <hr/>
      </>
     );
}

export default Component2;