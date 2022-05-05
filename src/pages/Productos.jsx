import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "../components/Producto";
import Spinner from "../components/Spinner";

function Productos() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  useEffect(() => {
    dispatch(obtenerProductosAction());
  }, []);

  if (cargando) return <Spinner />;

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error && (
        <p className="alert alert-danger text-center mt-4">Hubo un error</p>
      )}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos?.length === 0 ? (
            <tr>
              <td colSpan="3">No hay productos</td>
            </tr>
          ) : (
            productos?.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default Productos;
