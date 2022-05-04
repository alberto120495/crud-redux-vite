import { types } from "../types";

const initalState = {
  productos: [],
  loading: false,
  error: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case types.COMENZAR_DESCARGA_PRODUCTOS:
    case types.AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case types.AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: [...state.productos, action.payload],
      };

    case types.DESCARGA_PRODUCTOS_ERROR:
    case types.AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    default:
      return state;
  }
}
