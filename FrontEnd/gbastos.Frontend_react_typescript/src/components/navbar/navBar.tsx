import { useContext, useState } from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import { Menu, LightMode, DarkMode } from "@mui/icons-material";
import ToggleButton from "@mui/material/ToggleButton";
import { ThemeContext } from "../../context/themeContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/list", label: "Categorias" },
  { href: "/add", label: "Adicionar" },
];

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuStyles = open ? "menu open" : "menu"

  return (
    <div className="navbar">
      <div className="brand">
        <span>KillWangy</span>
      </div>
      <div className={menuStyles}>
        <ul>
          {links.map((item) => (
            <li key={item.href} onClick={toggleOpenMenu} >
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburguer">
        <Menu onClick={toggleOpenMenu} />
      </div>
      <div className="toggle">
        <ToggleButton
          value="check"
          selected={darkMode}
          onChange={toggleDarkMode}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </ToggleButton>
      </div>
    </div>
  );
};

export default NavBar;
