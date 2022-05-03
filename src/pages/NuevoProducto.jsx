import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";

function NuevoProducto() {
  const [formProduct, setFormProduct] = useState({
    producto: "",
    precio: 0,
  });
  const dispatch = useDispatch();

  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();
    if (formProduct.producto === "" || formProduct.precio === 0) {
      alert("Por favor, llene todos los campos");
      return;
    }
    agregarProducto(formProduct);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoProducto;
