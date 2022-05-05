import { types } from "../types";

const initalState = {
  productos: [],
  loading: false,
  error: null,
  productoEliminar: null,
  productoEditar: null,
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
    case types.PRODUCTO_ELIMINADO_ERROR:
    case types.PRODUCTO_EDITADO_ERROR:
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

    case types.OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      };
    case types.PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };

    case types.OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };

    case types.COMENZAR_EDICION_PRODUCTO:
      return {
        ...state,
        loading: true,
      };
    case types.PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
        productoEditar: null,
      };
    default:
      return state;
  }
}
