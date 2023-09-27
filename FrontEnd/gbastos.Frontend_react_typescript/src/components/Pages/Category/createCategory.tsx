import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { ICategory, ICategoryDTO } from "../interfaces/ICategory";
import httpModule from "../../../api/client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button, TextField } from "@mui/material";
import "../../Styles/categories.scss";

export const CreateCategory = () => {

    const [category, setCategory] = useState<ICategoryDTO>({
        Name: ""
      });
      const [categories, setCategories] = useState<ICategory[]>([]);
      const Redirect = useNavigate();

      useEffect(() => {
        httpModule
           .get<ICategory[]>("GetCategories")
           .then((response) => {
            setCategories(response.data);
           })
           .catch((error) => {
              alert("Error");
              console.log(error);
           });
     }, []);

      const handleClickSaveBtn = () => {
        if (category.Name === ""){
          alert("Preencha o campo Nome");
          return;
        }
        httpModule
        .post(httpModule + "AddCategory", category)
        .then(() => Redirect("/categoriesList"))
        .catch(error=>console.log(error))      
      const newCategoryFormData = new FormData();
      newCategoryFormData.append("Name", category.Name);
      httpModule
         .post("AddCategory", newCategoryFormData)
         .then(() => redirect("/categoriesList"))
         .catch((error) => console.log(error));
   };

   const handleClickBackBtn = () => {
      redirect("/categoriesList");
   };

   return (
      <div className="content">
         <div className="add-category">
            <h2>Adicionar nova Categoria</h2>
            <FormControl fullWidth>
               <InputLabel>Categoria</InputLabel>
               <Select
                  value={category.Name}
                  label="Category"
                  onChange={(e) => setCategory({ ...category, Name: e.target.value })}
               >
                  {categories.map((item) => (
                     <MenuItem key={item.Id} value={item.Name}>
                        {item.Name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>

            <TextField
               autoComplete="off"
               label="Name"
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