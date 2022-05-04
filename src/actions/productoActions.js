import client from "../config/axios";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { types } from "../types";

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      //Insertar en la API
      await client.post("/productos", producto);

      //Actualizar el estado de la app
      dispatch(agregarProductoExito(producto));
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal, intenta de nuevo",
      });
    }
  };
}

const agregarProducto = () => {
  return {
    type: types.AGREGAR_PRODUCTO,
    payload: true,
  };
};

//si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => {
  return {
    type: types.AGREGAR_PRODUCTO_EXITO,
    payload: producto,
  };
};

//Si hay un error
const agregarProductoError = (estado) => {
  return {
    type: types.AGREGAR_PRODUCTO_ERROR,
    payload: estado,
  };
};

//Obtener productos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const { data } = await client.get("/productos");
      dispatch(descargarProductosExitosa(data));
    } catch (error) {
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => {
  return {
    type: types.COMENZAR_DESCARGA_PRODUCTOS,
    payload: true,
  };
};

const descargarProductosExitosa = (productos) => {
  return {
    type: types.DESCARGA_PRODUCTOS_EXITO,
    payload: productos,
  };
};

const descargaProductosError = () => {
  return {
    type: types.DESCARGA_PRODUCTOS_ERROR,
    payload: true,
  };
};
