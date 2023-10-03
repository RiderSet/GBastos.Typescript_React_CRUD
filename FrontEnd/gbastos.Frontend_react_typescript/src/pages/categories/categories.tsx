import { useEffect, useState } from "react";
import "./category.scss";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CategoriesGrid from "../../components/categories/categoriesGrid";
import { ICategory } from "../../Interfaces/ICategory";
import  httpModule  from "../../crosscutting/api/client";

const Categories = () => {
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const redirect = useNavigate();

   useEffect(() => {
      setLoading(true);
      httpModule
         .get("GetCategories")
         .then((response) => {
            setCategories(response.data);
            setLoading(false);
         })
         .catch((error) => {
            alert("Error");
            console.log(error);
            setLoading(false);
         });
   }, []);

   return (
      <div className="content categories">
         <div className="heading">
            <h2>Categorias</h2>
            <Button variant="outlined" onClick={() => redirect("/add")}>
               <Add />
            </Button>
         </div>
         {loading ? (
            <CircularProgress size={100} />
         ) : categories.length === 0 ? (
            <h1>Sem categorias</h1>
         ) : (
            <CategoriesGrid data={categories} />
         )}
      </div>
   );
};

export default Categories;