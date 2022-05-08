import { types } from "../types";

const initalState = {
  alerta: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case types.MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload,
      };

    case types.OCULTAR_ALERTA:
      return {
        ...state,
        alerta: null,
      };

    default:
      return state;
  }
}
