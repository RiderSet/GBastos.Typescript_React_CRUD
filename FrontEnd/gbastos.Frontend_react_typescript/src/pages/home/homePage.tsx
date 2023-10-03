import reactLogo from "../../assets/react.svg";
import logo from "../..//assets/logo.png";
import "./homePage.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/list" >
          <img src={logo} className="logo" alt="GBastos logo" />
        </Link>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gerenciamento de Categorias</h1><br />
      <div>Categorias</div><br />
      <div className="wrapper">
        <p>Isto é uma avaliação</p><br />
      <div>
        <p className="read-the-docs">
          Clique no logo <code>Killwangy</code> para ir para a
          página inicial
        </p>
      </div>
      </div>
    </>
  );
}

export default Home;