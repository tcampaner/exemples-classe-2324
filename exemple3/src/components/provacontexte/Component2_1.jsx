import { useContext } from "react";
import { MeuContexte } from "./MeuContexte";

function Component2_1() {
    const contexte=useContext(MeuContexte);
    return ( 
      <>
        <h3>Component 2_1</h3>
        <button onClick={(e)=>contexte.setNom('')}>Borrar nom</button>
        <hr/>
      </>
     );
}

export default Component2_1;