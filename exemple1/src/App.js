import { BrowserRouter,Routes,Route } from "react-router-dom";
import Feines from "./components/feines/Feines";
import Ajuda from "./components/Ajuda";
import Menu from "./components/Menu";
import Municipis from "./components/municipis/Municipis";
import Autors from "./components/autors/Autors";
import MunicipisEdita from "./components/municipis/MunicipisEdita";
import MunicipisCRUD from "./components/municipis/MunicipisCRUD";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/feines" element={<Feines />} />
          <Route path="/municipis" element={<Municipis />} />
          <Route path="/municipis/afegir" element={<MunicipisEdita />} />
          <Route path="/municipis/:id" element={<MunicipisCRUD />}></Route>
          <Route path="/autors" element={<Autors />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
