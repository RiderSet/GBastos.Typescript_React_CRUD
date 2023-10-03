import { useState } from "react";
import "./category.scss";
import { ICreateCategoryDto } from "../../Interfaces/ICategory";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../crosscutting/api/client";

const AddCategory = () => {
   const [category, setCategory] = useState<ICreateCategoryDto>({ Name: "" });
   const redirect = useNavigate();

   const handleClickSaveBtn = () => {
      if (category.Name === "" ) {
         alert("Preencha o campo nome");
         return;
      }
      httpModule
         .post("AddCatgory", category)
         .then(() => redirect("/list"))
         .catch((error) => console.log(error));
   };

   const handleClickBackBtn = () => {
      redirect("/list");
   };

   return (
      <div className="content">
         <div className="add-category">
            <h2>Adicionar Nova Categoria</h2>
            <TextField
               autoComplete="off"
               label="Category Name"
               variant="outlined"
               value={category.Name}
               onChange={(e) => setCategory({ ...category, Name: e.target.value })}
            />
            <div className="btns">
               <Button variant="outlined" color="primary" onClick={handleClickSaveBtn}>
                  Save
               </Button>
               <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
                  Back
               </Button>
            </div>
         </div>
      </div>
   );
};

export default AddCategory;