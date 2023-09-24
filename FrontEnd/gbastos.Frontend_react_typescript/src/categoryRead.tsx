import axios from 'axios';
import { useEffect, useState } from 'react'
import { baseUrl } from './api/client';
import { Link, useParams } from 'react-router-dom';

function CategoryRead() {
    const {guid} = useParams();
    const [values, setValues] = useState([]);

    useEffect(() => {
      axios.get(baseUrl + 'GetByGuid/' + guid)
      .then(res => setValues(res.data))
      .catch(err => console.log(err));
    }, [])
    
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-itens-center bg-light" >
    <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded" >
      <h1>Detalhe da categoria</h1>
        <div className="mb-2" >
            <strong>Nome: {values}</strong>
        </div>
        <Link to={`/updateCategory/${guid}`} className="btn btn-success" >Atualizar</Link>
        <Link to="/categoriesList" className="btn btn-primary ms-3" >Voltar</Link>
    </div>
  </div>
  )
}

export default CategoryRead