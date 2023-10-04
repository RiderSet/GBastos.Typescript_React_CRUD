import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./category.scss";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import httpModule from "../../crosscutting/api/client";

const AddCategory = () => {
   const [category, setCategory] = useState({ Nome: "" });
   const redirect = useNavigate();

   const addCategoryHandler = () => {
      httpModule
      .post("AddCategory", category)
      .then(res => {         
         redirect("/list")
      })
   }

   return (
      <div className="content">
         <div className="add-category">
            <h2>Adicionar Nova Categoria</h2>
            <TextField
               autoComplete="off"
               label="Category Name"
               variant="outlined"
               value={category.Nome}
               onChange={(e) => setCategory({ ...category, Nome: e.target.value })}
            />
            <div className="btns">
               <Button variant="outlined" color="primary" onClick={addCategoryHandler}>
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