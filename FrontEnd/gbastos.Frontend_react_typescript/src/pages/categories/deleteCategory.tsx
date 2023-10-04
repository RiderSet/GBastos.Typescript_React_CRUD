import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./category.scss";
import {} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import httpModule from "../../crosscutting/api/client";

const DeleteCategory = () => {
   const [category, setCategory] = useState({ Guid: "" });
   const redirect = useNavigate();

   const delCategoryHandler = () => {
      httpModule
      .post("DeleteCategory", category.Guid)
      .then(res => {         
         redirect("/list")
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
            <div className="btns">
               <Button variant="outlined" color="primary" onClick={delCategoryHandler}>
                  Delete
               </Button>
               <Button variant="outlined" color="secondary" onClick={handleClickBackBtn}>
                  Back
               </Button>
            </div>
         </div>
      </div>
   );
};

export default DeleteCategory;