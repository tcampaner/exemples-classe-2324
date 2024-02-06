import { useState } from "react";
import Component2 from "./Component2";
import Component1 from "./Componet1";
import { MeuContexte } from "./MeuContexte";

function ProvaContexte() {
    const [nom,setNom]=useState('Tomeu')
    return (
      <>
        <MeuContexte.Provider value={{ nom, setNom }}>
          <Component1 />
          <Component2 />
        </MeuContexte.Provider>
      </>
    );
}

export default ProvaContexte;