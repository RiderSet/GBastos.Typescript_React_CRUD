import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./category.scss";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import httpModule from "../../crosscutting/api/client";
import { ICategory } from "../../Interfaces/ICategory";

const EditCategory = () => {
  const redirect = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState<ICategory>([]);

  useEffect(() => {
    httpModule
    .get("GetByGuid/" + id)
    .then(res => setCategory(res.data))
    .catch(err => console.log(err))
  }, [])

   const editCategoryHandler = () => {
      httpModule
      .put("UpdateCategory/" + id, category)
      .then(res => {         
         redirect("/list")
      })
   }

   const handleClickBackBtn = () => {
       redirect("/list");
   }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    httpModule
    .put("UpdateCategory", category.Guid)
  }

   return (
      <div className="content">
      <form onSubmit={handleSubmit}>
         <div className="add-category">
            <h2>Editar Categoria</h2>
            <TextField
               autoComplete="off"
               label="Nome da Castegoria"  
               variant="outlined"
               value={category.Nome}
               onChange={(e) => setCategory({ ...category, Nome: e.target.value })}
            />
            <div className="btns">
               <Button variant="outlined" color="primary" onClick={editCategoryHandler}>
                  Edit
               </Button>
               <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
                  Back
               </Button>
            </div>
         </div>
         </form>
      </div>
   );
};

export default EditCategory;