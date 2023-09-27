import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../interfaces/ICategory";
import httpModule from "../../../api/client";
import CategoryGrid from "../Grid/categoryGrid";
import "../../Styles/categories.scss";
import NavBar from "../../../navbar/navbar";

export const CategoriesList = () => {
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
      <div className="content categories">
         <NavBar />
         <div className="heading">
            <h2>Categorias</h2>
            <Button variant="outlined" onClick={() => redirect("/createCategory")}>
               <Add />
            </Button>
         </div>
         {loading ? (
            <CircularProgress size={100} />
         ) : categories.length === 0 ? (
            <h1>Sem categorias</h1>
         ) : (
            <CategoryGrid data={categories} />
         )}
      </div>
   );
};