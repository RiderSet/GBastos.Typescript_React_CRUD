import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { baseUrl } from "./api/client";
import axios from "axios";

const UpdateCategory = () => {
  const navigate = useNavigate();
  
  const {guid} = useParams()
  const [values, setValues] = useState({
    nome: ""
  })

  useEffect(() => {
    axios.get(baseUrl + 'GetByGuid/' + guid)
    .then(res => {
      setValues(res.data)
    })
    .catch(err => console.log(err));
  }, [])

  const handleUpdate = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    axios.put(baseUrl + 'UpdateCategory/' + guid, values)
    .then(res => {
      console.log(res)
      navigate("/categoriesList")
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-itens-center bg-light" >
    <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded" >
      <h1>Editar categoria</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-2" >
          <label htmlFor="nome" >Descrição:</label>
          <input type="text" name="nome" className="form-control" placeholder="Informe a descrição da categoria" 
          value={values.nome} 
          onChange={e => setValues({...values, nome: e.target.value})} />
        </div>
        <button className="btn btn-success" >Atualizar</button>
        <Link to="/categoriesList" className="btn btn-primary ms-3" >Voltar</Link>
      </form>
    </div>
  </div>
  )
}

export default UpdateCategory