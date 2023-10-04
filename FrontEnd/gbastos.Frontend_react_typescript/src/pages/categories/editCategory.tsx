
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import httpModule from "../../crosscutting/api/client";
import { Button, TextField } from "@mui/material";
import { ICreateCategoryDto } from "../../Interfaces/ICategory";

function EditCategory() {   
  const location = useLocation();
  const state = location.state;
  //const { id } = useParams();

  const redirect = useNavigate();
  const [categoryDTO, setCategoryDTO] = useState<ICreateCategoryDto>({
  Nome: state.Nome
});
  const [category, setCategory] = useState({
  Guid: state.Guid,
  Nome: state.Nome
});


useEffect(() => {
  httpModule.get("GetByGuid/" + category.Guid)
  .then(res => setCategory(res.data))
  .catch(err => console.log(err))
})

const upDateCategory = (event) => {
  event.preventDefault();
  httpModule
  .post("UpdateCategory/" + category.Guid, categoryDTO)
  .then(res => {
    redirect("/list");
  })
}

const handleClickBackBtn = () => {
    redirect("/list");
}

  return (
    <div className="content">
    <div className="add-category">
       <h2>Excluir Categoria</h2>
       <TextField
          autoComplete="off"
          label="Category Guid"
          variant="outlined"
          value={category.Guid}
          onChange={(e) => setCategory({ ...category, Guid: e.target.value })}
       />
       <TextField
          autoComplete="off"
          label="Category Nome"
          variant="outlined"
          value={categoryDTO.Nome}
          onChange={(e) => setCategoryDTO({ ...categoryDTO, Nome: e.target.value })}
       />
       <div className="btns">
          <Button variant="outlined" color="primary" onClick={upDateCategory}>
             UpDate
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
             Back
          </Button>
       </div>
    </div>
 </div>
  )
}

export default EditCategory