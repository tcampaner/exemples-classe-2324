import { TIPUS_ACCIO_LOGIN,estatInicialLogin,loginReducer } from "./store/reducers/loginReducer";
import Main from "./Main";
import { Contexte } from "./contexts/Contexte";
import { useReducer } from "react";

function App() {
  const [estatLogin, dispatchLogin] = useReducer(loginReducer, estatInicialLogin);
  return (
   <Contexte.Provider value={{estatLogin:estatLogin,dispatchLogin:dispatchLogin}}> 
    <Main/>
   </Contexte.Provider>
  );
}

export default App;
