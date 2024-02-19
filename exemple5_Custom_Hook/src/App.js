import { BrowserRouter,Routes,Route } from "react-router-dom";
import Ajuda from "./components/Ajuda";
import Menu from "./components/Menu";
import Autors from "./components/autors/Autors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/autors" element={<Autors />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<h1>Opció incorrecta</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
