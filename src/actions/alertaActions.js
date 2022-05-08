import { types } from "../types";

//Muestra una alerta
export const mostrarAlerta = (alerta) => {
  return (dispatch) => {
    dispatch(crearAlerta(alerta));
  };
};

//Oculta una alerta
export const ocultarAlerta = () => {
  return (dispatch) => {
    dispatch(desaparecerAlerta());
  };
};

const crearAlerta = (alerta) => {
  return {
    type: types.MOSTRAR_ALERTA,
    payload: alerta,
  };
};

const desaparecerAlerta = () => {
  return {
    type: types.OCULTAR_ALERTA,
  };
};
