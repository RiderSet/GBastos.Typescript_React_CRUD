//import React from 'react'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "./api/client";
import axios from "axios";

function AddCategory() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nome: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseUrl + "AddCategory", values)
      .then((res) => {
        console.log(res);
        navigate("/categoriesList");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-itens-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Adicionar categoria</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="nome">Descrição:</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
              placeholder="Informe a descrição da categoria"
            ></input>
          </div>
          <button className="btn btn-success">Enviar</button>
          <Link to="/categoriesList" className="btn btn-primary ms-3">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
