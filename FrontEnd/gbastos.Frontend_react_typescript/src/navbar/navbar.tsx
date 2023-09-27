//import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { Menu } from "@mui/icons-material";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
    <div className="hamburguer"><Menu /></div>
      <div className="brand"><Link to="/">GBastos</Link></div>
      <div className="menu">
        <ul>
          <li>
          </li>
          <li>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createCategory">Adicionar Nova</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
