//import React from 'react'
import axios from "axios";
import { baseUrl } from "./api/client";
//import "./categoriesList.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + 'GetCategories')
    .then(res => setCategories(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="d-flex justify-content-center align-itens-center bg-light vh-100" >
      <Link to="/"><h2>Categorias</h2></Link>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end" ><Link to="/create" className="btn btn-success" >Nova +</Link></div>
        <table className="table table-striped" >
          <thead>
            <tr>
              <th>Guid</th><br />
              <th>Nome</th><br />
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td><br />
                  <td>{d.nome}</td><br />
                  <td>
                    <Link to={'/categoryRead/${d.id}'} className="btn btn-sm btn-info me-2" >Detalhe</Link>
                    <Link to={"/updateCategory"} className="btn btn-sm btn-primary me-2" >Editar</Link>
                    <button className="btn btn-sm btn-danger" >Excluir</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoriesList