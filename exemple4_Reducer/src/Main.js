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
import { useEffect,useContext } from "react";
import {storage} from "./utils/storage";
import { Contexte } from "./contexts/Contexte";

function Main() {
  const contexte=useContext(Contexte);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>} >
        {/* Routes sols per a usuaris logats*/}
        {contexte.estatLogin.token && <>
          <Route path="/feines" element={<Feines />} />
          <Route path="/municipis" element={<Municipis />} />
          <Route path="/municipistable" element={<MunicipisTable />} />
          <Route path="/municipis/afegir" element={<MunicipisEdita />} />
          <Route path="/municipis/:id" element={<MunicipisCRUD />}></Route>
          <Route path="/autors" element={<Autors />} />
          <Route path="/logout" element={<Logout/>} />
        </>} 
        {/* Routes sols per a usuaris NO logats*/}
        {!contexte.estatLogin.token && <Route path="/login" element={<Login/>} /> } 
        {/* Routes per a tots els usuaris*/}
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
