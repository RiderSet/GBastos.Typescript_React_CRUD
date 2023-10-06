import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import CategoriesGrid from "../../components/categories/categoriesGrid";
import { ICategory } from "../../Interfaces/ICategory";
import  httpModule  from "../../crosscutting/api/client";
import NavBar from "../../components/navbar/navBar";
import "./category.scss";

const Categories = () => {
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

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
      <NavBar />
         <div className="heading">
            <h2 className="h2">Lista de Categorias</h2>
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