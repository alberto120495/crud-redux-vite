import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { crearNuevoProductoAction } from "../actions/productoActions";
import Spinner from "../components/Spinner";

function NuevoProducto() {
  const navigate = useNavigate();
  const [formProduct, setFormProduct] = useState({
    producto: "",
    precio: 0,
  });
  const dispatch = useDispatch();

  //Acceder al state
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();
    if (formProduct.producto === "" || formProduct.precio === 0) {
      alert("Por favor, llene todos los campos");
      return;
    }
    agregarProducto(formProduct);
    setFormProduct({
      producto: "",
      precio: 0,
    });
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Agregar Nuevo Producto</h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="producto">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="producto"
                  id="producto"
                  value={formProduct.nombre}
                  onChange={(e) =>
                    setFormProduct({
                      ...formProduct,
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
                  value={formProduct.precio}
                  onChange={(e) =>
                    setFormProduct({
                      ...formProduct,
                      [e.target.name]: Number(e.target.value),
                    })
                  }
                />
              </div>
              <input
                type="submit"
                value="Agregar "
                className="btn btn-primary text-uppercase d-block w-100"
              />
            </form>
            {cargando ? <Spinner /> : null}
            {error ? (
              <p className="alert alert-danger p-2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoProducto;
