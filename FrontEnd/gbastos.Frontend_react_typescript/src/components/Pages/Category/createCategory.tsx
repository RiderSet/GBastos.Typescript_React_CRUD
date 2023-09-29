import { useState } from "react";
import { ICategoryDTO } from "../interfaces/ICategory";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../../api/client";
import "../../Styles/categories.scss";

const CreateCategory = () => {
   const [categoriesDTO, setCategoriesDTO] = useState<ICategoryDTO>({
      Nome: "",
   });

   const redirect = useNavigate();

   const handleClickSaveBtn = () => {
      if ( categoriesDTO.Nome === "" ) {
         alert("Preencha o campo");
         return;
      }
      httpModule
         .post("AddCategory", categoriesDTO)
         .then(() => redirect("/categoriesList"))
         .catch((error) => console.log(error));
   };

   const handleClickBackBtn = () => {
      redirect("/categoriesList");
   };

   return (
      <div className="content">
         <div className="add-job">
            <h2>Adicionar nova categoria</h2>
            <TextField
               autoComplete="off"
               label="Nome da Categoria"
               variant="outlined"
               value={categoriesDTO.Nome}
               onChange={(e) => setCategoriesDTO({ ...categoriesDTO, Nome: e.target.value })}
            />

            <div className="btns">

               <Button variant="outlined" color="primary" onClick={handleClickSaveBtn}>
                  Save
               </Button>
               <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
                  Voltar
               </Button>

            </div>
         </div>
      </div>
   );
};

export default CreateCategory;