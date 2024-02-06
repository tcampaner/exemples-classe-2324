import { BrowserRouter,Routes,Route } from "react-router-dom";
import Feines from "./components/feines/Feines";
import Ajuda from "./components/Ajuda";
import Menu from "./components/Menu";
import Municipis from "./components/municipis/Municipis";
import Autors from "./components/autors/Autors";
import MunicipisEdita from "./components/municipis/MunicipisEdita";
import MunicipisCRUD from "./components/municipis/MunicipisCRUD";
import MunicipisTable from "./components/municipis/MunicipisTable";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import { useState,useEffect } from "react";
import {storage} from "./utils/storage";
import ProvaContexte from "./components/provacontexte/ProvaContexte";

function App() {
  const  [token, setToken] = useState(null);
  const [usuari, setUsuari] = useState(null);

  useEffect(() => {
    const tk = storage.get("token");  // llegint el token del localStorage
    const us = storage.get("usuari"); // llegint l'usuari del localStorage
    if (tk && us) {
      setToken(tk);
      setUsuari(us);
    }
  }, []);

  const ferGuardaUsuari = (usuari) => {
    storage.set("usuari",usuari);  // guardant l'usuari al localStorage
    setUsuari(usuari);
  }

  const ferGuardaToken = (token) => {
    storage.set("token",token);  // guardant el token al localStorage
    setToken(token);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu usuari={usuari}/>} >
        {/* Routes sols per a usuaris logats*/}
        {usuari && <>
          <Route path="/feines" element={<Feines />} />
          <Route path="/municipis" element={<Municipis />} />
          <Route path="/municipistable" element={<MunicipisTable />} />
          <Route path="/municipis/afegir" element={<MunicipisEdita />} />
          <Route path="/municipis/:id" element={<MunicipisCRUD />}></Route>
          <Route path="/autors" element={<Autors />} />
          <Route path="/logout" element={<Logout/>} />
        </>} 
        {/* Routes sols per a usuaris NO logats*/}
        {!usuari && <Route path="/login" element={<Login guardaUsuari={ferGuardaUsuari} guardaToken={ferGuardaToken}/>} /> } 
        {/* Routes per a tots els usuaris*/}
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/provacontexte" element={<ProvaContexte />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
