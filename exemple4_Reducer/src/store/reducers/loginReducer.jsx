// Constants amb el tipus de les accions que podem fer damunt l'estat
export const TIPUS_ACCIO_LOGIN={
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT"
};


// valor de l'estat inicial
export const estatInicialLogin={
    token:null,
    usuari:null
}

// Reducer: funció que modifica l'estat a partir d'una acció
// Les accions són objectes que tenen una propietat type que indica el tipus d'acció 
// i opcionalment una propietat payload amb les dades a afegir o modificar a l'estat
export function loginReducer(state, action) {
    switch (action.type) {
        case TIPUS_ACCIO_LOGIN.LOGIN:
            console.log(action);
            return { token: action.payload.token, usuari: action.payload.usuari };
        case TIPUS_ACCIO_LOGIN.LOGOUT:
            return { token: null, usuari: null };
        default:
            console.log(action);
            return state;
    }
}