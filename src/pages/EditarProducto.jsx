function EditarProducto() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Editar Producto</h2>
            <form>
              <div className="form-group">
                <label htmlFor="producto">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="producto"
                  id="producto"
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
