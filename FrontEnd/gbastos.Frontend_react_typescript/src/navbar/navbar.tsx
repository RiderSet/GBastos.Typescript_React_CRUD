import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="brand">Gerenciamento de Categorias</div>
      <div className="hamburguer">
        <Menu open={false} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/App">Categorias</Link>
          </li>
          <li>
            <Link to="/addCategory">Adicionar Nova</Link>
          </li>
          <li>
            <Link to="/updateCategory">Atualizar</Link>
          </li>
          <li>
            <Link to="/deleteCategory">Excluir</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
