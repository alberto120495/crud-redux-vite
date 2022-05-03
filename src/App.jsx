import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Layout from "./layouts/Layout";
import NuevoProducto from "./pages/NuevoProducto";
import EditarProducto from "./pages/EditarProducto";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Productos />} />
          <Route path="productos/nuevo" element={<NuevoProducto />} />
          <Route path="productos/editar/:id" element={<EditarProducto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
