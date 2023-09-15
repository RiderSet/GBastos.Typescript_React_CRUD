import { useState } from "react";
import { ICreateCategoryDto } from "../../Types/global.types";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../Helpers/http.module";
import "./Category.scss";

const AddCategory = () => {
   const [category, setCategory] = useState<ICreateCategoryDto>({ id: "", name: "" });
   const redirect = useNavigate();

   const handleClickSaveBtn = () => {
      if (category.name === "") {
         alert("Preencha o campo!");
         return;
      }
      httpModule
         .post("AddCategory", category)
         .then((response) => redirect("GetCategories"))
         .catch((error) => console.log(error));
   };

   const handleClickBackBtn = () => {
      redirect("GetCategories");
   };

   return (
      <div className="content">
         <div className="add-category">
            <h2>Adicionar nova categoria</h2>
            <TextField
               autoComplete="off"
               label="Id"
               variant="outlined"
               value={category.id}
               onChange={(e) => setCategory({ ...category, id: e.target.value })}
            />
            <TextField
               autoComplete="off"
               label="Nome"
               variant="outlined"
               value={category.name}
               onChange={(e) => setCategory({ ...category, name: e.target.value })}
            />
            <div className="btns">
               <Button variant="outlined" color="primary" onClick={handleClickSaveBtn}>
                  Salvar
               </Button>
               <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
                  Voltar
               </Button>
            </div>
         </div>
      </div>
   );
};

export default AddCategory;