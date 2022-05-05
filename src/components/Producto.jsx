import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { borrarProductoAction } from "../actions/productoActions";
import Swal from "sweetalert2/dist/sweetalert2.all.js";

function Producto({ producto }) {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();

  //Confirmar si desea eliminar
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario

    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td className="font-weight-bold">${precio}</td>
      <td className="acciones">
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-warning mr-2"
        >
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Producto;
