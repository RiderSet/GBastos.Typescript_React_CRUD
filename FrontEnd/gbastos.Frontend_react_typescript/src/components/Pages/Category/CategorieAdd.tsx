import { useEffect, useState } from "react";
import "../../Styles/categories.scss"
import { useNavigate } from "react-router-dom";
import httpModule from "../../../api/client";
import { Input, Button, Row, Col } from 'reactstrap';
import NavBar from '../../../navbar/navbar';

const AddCategory = () => {
  const [data, setData] = useState({
      id: "",
      nome: ""
  });
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState('');
  const redirect = useNavigate();

  useEffect(() => {
    httpModule
    .get('GetCategories')
          .then((response) => {
            setCategories(response.data);
          })
  }, []);

  const addCategory = () => {
      console.log("data", data)
      const categoryData = {
          categoryId: (categories.length + 1),
          id: (categories.length + 1),
          nome: data.nome
      }
      httpModule
      .post('AddCategory', categoryData)
          .then(() => {
              console.log("Categoria adicionada")
              setData({
                  id: "",
                  nome: ""
              })
              setMsg("Categoria adicionada")
          }).catch(() => {
              setMsg("error")
          })
  }

  const handleClickBackBtn = () => {
    redirect("/categoriesList");
 };

  return (
    <>
    <NavBar />
    <Row>
        <h3>Adicionar Categoria</h3>
        <Col>
            <Input
                autoComplete="off"
                autoFocus
                type='textarea'
                id="body"
                value={data.nome}
                placeholder='Descreva a nova categoria'
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                className={'post-body'}
            />
        </Col>
        <Col>
            <Button className="post-button" onClick={() => addCategory()}>Adicionar</Button>
            <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>Voltar</Button>
        </Col>
        <Col>
            <h3>{msg}</h3>
        </Col>
    </Row>
</>
  );
};

export default AddCategory;