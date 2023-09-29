import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.scss";
import NavBar from './navbar/navbar';

const App: React.FC = () => {
  return (
    <>
    <div>
      <NavBar />
      <div className="home" >
        <Link to="/CategoriesList" className="navbar-brand" >
          <img src={logo} className="logo" alt="Vite logo" />
        </Link>
      </div>
      <h3>Categories Management</h3>
      <p>
        <code>Isto é uma avaliação</code>
      </p>
      <div>
        <Link to="/CategoriesList">Categorias</Link>
      </div>
      <p className="read-the-docs">You can also click on the Killwangy logo</p>
    </div>
  </>
  )
}

export default App;