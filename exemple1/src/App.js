import { BrowserRouter,Routes,Route } from "react-router-dom";
import Feines from "./components/Feines";
import Ajuda from "./components/Ajuda";
import Menu from "./components/Menu";
import Municipis from "./components/Municipis";
import Autors from "./components/autors/Autors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/feines" element={<Feines />} />
          <Route path="/municipis" element={<Municipis />} />
          <Route path="/autors" element={<Autors />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
