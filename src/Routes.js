import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

const routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    </Router>
  )
}

export default routes