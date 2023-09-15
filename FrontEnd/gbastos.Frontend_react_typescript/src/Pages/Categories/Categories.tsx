import { useEffect, useState } from "react";
import httpModule from "../../Helpers/http.module";
import { ICategory } from "../../Types/global.types";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CategoriesGrid from "../../components/Grid/grid.components";
import "./Category.scss";

const Categories = () => {
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const redirect = useNavigate();

   useEffect(() => {
      setLoading(true);
      httpModule
         .get<ICategory[]>("GetCategories")
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
      <div className="content categorias">
         <div className="heading">
            <h2>Categories</h2>
            <Button variant="outlined" onClick={() => redirect("./AddCategories.tsx")}>
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