import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Usuarios from "./pages/Usuarios";
import Vales from "./pages/Vales";
const routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/vales" element={<Vales />} />

        </Routes>
    </Router>
  )
}

export default routes