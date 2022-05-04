import { Link } from "react-router-dom";
function Producto({ producto }) {
  const { nombre, precio } = producto;
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

        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Producto;
