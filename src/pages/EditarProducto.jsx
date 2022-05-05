import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editarProductoAction,
  obtenerProductoEditar,
} from "../actions/productoActions";

function EditarProducto() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productoEditar = useSelector((state) => state.productos.productoEditar);

  const [actualizaProducto, setActualizaProducto] = useState({
    nombre: "",
    precio: 0,
  });

  useEffect(() => {
    dispatch(obtenerProductoEditar(id));
  }, []);

  useEffect(() => {
    setActualizaProducto(productoEditar);
  }, [productoEditar]);

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(actualizaProducto));
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Editar Producto</h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label htmlFor="producto">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  id="producto"
                  value={actualizaProducto?.nombre || ""}
                  onChange={(e) =>
                    setActualizaProducto({
                      ...actualizaProducto,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto"
                  name="precio"
                  id="precio"
                  value={actualizaProducto?.precio || ""}
                  onChange={(e) =>
                    setActualizaProducto({
                      ...actualizaProducto,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <input
                type="submit"
                value="Guardar Cambios"
                className="btn btn-primary text-uppercase d-block w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarProducto;
